import * as React from "react";
import { Scroll, ControlType, Animatable } from "framer";
import EmptyConnector from "./EmptyConnector";

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
    this.layerConfigs.forEach(({ left, top, props, originLeft, originTop }) => {
      const { speedX, speedY } = props;
      const scrollPosition = this.props.direction === "vertical" ? y : -x;
      const newTop = (scrollPosition * speedY) / 10 + originTop;
      const newLeft = (-scrollPosition * speedX) / 10 + originLeft;
      // console.log(props, left, top, newLeft, newTop);

      top.set(newTop);
      left.set(newLeft);
    });
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
    const rootElement = this.props.children[0];
    // console.log(rootElement);

    if (rootElement) {
      return (
        <Scroll {...this.props} onMove={this.handleScroll}>
          {this.cloneAndMakeLayersAnimatable(rootElement)}
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
