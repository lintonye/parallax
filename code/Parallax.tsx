import * as React from "react";
import { Scroll, ControlType, Animatable } from "framer";
import EmptyConnector from "./EmptyConnector";
import { RegisterContext } from "./RegisterContext";

interface Props {
  direction: "horizontal" | "vertical";
}

export class Parallax extends React.Component<Props> {
  static displayName = "Parallax Scroll";

  handleScroll = e => {
    const { x, y } = e;
    const { direction } = this.props;
    this.layerConfigs.forEach(({ left, top, props }) => {
      const { speedX, speedY, pinned } = props;
      const scrollPosition = direction === "vertical" ? y : -x;
      const newTop = (scrollPosition * speedY) / 10;
      const newLeft = (-scrollPosition * speedX) / 10;
      // console.log(props, left, top, newLeft, newTop);
      top.set(newTop);
      left.set(newLeft);
      if (pinned) {
        if (direction === "vertical") top.set(-y);
        else if (direction === "horizontal") left.set(-x);
      }
    });
  };

  registerLayer = layerConfigs => {
    // console.log("registerLayer:", layerConfigs);
    this.layerConfigs.push(layerConfigs);
  };

  unregisterLayer = layerConfigs => {
    this.layerConfigs = this.layerConfigs.filter(c => c !== layerConfigs);
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

  render() {
    const { children } = this.props;

    if (React.Children.count(children) > 0) {
      return (
        <RegisterContext.Provider
          value={{
            registerLayer: this.registerLayer,
            unregisterLayer: this.unregisterLayer
          }}
        >
          <Scroll {...this.props} onMove={this.handleScroll}>
            {children}
          </Scroll>
        </RegisterContext.Provider>
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
