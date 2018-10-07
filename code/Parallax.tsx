import * as React from "react";
import { Scroll, ControlType, Animatable } from "framer";
import EmptyConnector from "./EmptyConnector";
import RegisterContext from "./RegisterContext";

interface Props {
  direction: "horizontal" | "vertical";
}

const cloneAndUpdateProps = (getUpdatePropsFun, node) => {
  if (!React.isValidElement<{ children }>(node)) return node;
  const updateProps = getUpdatePropsFun(node);
  const clonedChildren = React.Children.map(node.props.children, c =>
    cloneAndUpdateProps(getUpdatePropsFun, c)
  );
  return React.cloneElement(node, updateProps, clonedChildren);
};

export class Parallax extends React.Component<Props> {
  static displayName = "Parallax Scroll";

  handleScroll = e => {
    const { x, y } = e;
    const { direction } = this.props;
    this.layerConfigs.forEach(({ left, top, props, originLeft, originTop }) => {
      const { speedX, speedY, pinned } = props;
      const scrollPosition = direction === "vertical" ? y : -x;
      const newTop = (scrollPosition * speedY) / 10 + originTop;
      const newLeft = (-scrollPosition * speedX) / 10 + originLeft;
      // console.log(props, left, top, newLeft, newTop);
      top.set(newTop);
      left.set(newLeft);
      if (pinned) {
        if (direction === "vertical") top.set(originTop - y);
        else if (direction === "horizontal") left.set(originLeft - x);
      }
    });
  };

  registerLayer = layerConfigs => {
    this.layerConfigs.push(layerConfigs);
  };

  unregisterLayer = layerConfigs => {
    // TODO
  };

  static defaultProps = { ...Scroll.defaultProps };
  static propertyControls = {
    ...Scroll.propertyControls,
    direction: {
      title: "direction",
      type: ControlType.SegmentedEnum,
      options: ["horizontal", "vertical"]
    },
    directionLock: {} // Remove the directionLock property from Scroll
  };

  layerConfigs = [];

  cloneAndMakeLayersAnimatable = e => {
    this.layerConfigs = [];
    const makeAnimatable = n => {
      const {
        componentIdentifier,
        left: originLeft,
        top: originTop,
        children
      } = n.props;
      if (/ParallaxFrame/.test(componentIdentifier)) {
        const left = Animatable(originLeft);
        const top = Animatable(originTop);
        // props of ParallaxFrame component are stored in a direct child element
        const compProps = children[0].props;
        this.layerConfigs.push({
          left,
          top,
          props: compProps,
          originLeft,
          originTop
        });
        return { left, top };
      } else {
        return null;
      }
    };
    return cloneAndUpdateProps(makeAnimatable, e);
  };

  render() {
    const { children } = this.props;

    if (React.Children.count(children) > 0) {
      return (
        <Scroll {...this.props} onMove={this.handleScroll}>
          <RegisterContext.Provider
            value={{
              registerLayer: this.registerLayer,
              unregisterLayer: this.unregisterLayer
            }}
          >
            {children}
          </RegisterContext.Provider>
        </Scroll>
      );
    } else {
      return (
        <EmptyConnector
          title="Parallax Scroll"
          description="Connect to a scrolling content frame"
        />
      );
    }
  }
}
