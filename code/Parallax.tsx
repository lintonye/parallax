import * as React from "react";
import { Scroll, ControlType, Animatable, animate } from "framer";
import { EmptyConnector } from "./EmptyConnector";
import { RegisterContext } from "./RegisterContext";
import * as math from "mathjs";
export * from "./ScrollOverrides";

type ScrollProps = {
  s: number;
  vx: number;
  vy: number;
};

interface Props {
  direction: "horizontal" | "vertical";
  onScroll: (scrollProps: ScrollProps) => void;
}

export class Parallax extends React.Component<Props> {
  lastX?: number;
  lastY?: number;
  lastTimestamp?: number;
  static displayName = "Parallax Scroll";

  handleScroll = e => {
    const { x, y } = e;
    let vx = 0,
      vy = 0;
    if (
      typeof this.lastX !== "undefined" &&
      typeof this.lastY !== "undefined"
    ) {
      const duration = Date.now() - this.lastTimestamp;
      vx = (x - this.lastX) / duration;
      vy = (y - this.lastY) / duration;
    }
    this.lastX = x;
    this.lastY = y;
    this.lastTimestamp = Date.now();
    const { direction, onScroll } = this.props;
    const scrollPosition = direction === "vertical" ? y : x;
    const scrollMaxX = this.props.children[0].props.width - this.props.width;
    const scrollMaxY = this.props.children[0].props.height - this.props.height;
    const scrollMax = direction === "vertical" ? scrollMaxY : scrollMaxX;
    const scrollProps = {
      s: scrollPosition,
      sx: x,
      sy: y,
      vx,
      vy,
      direction,
      scrollMax,
      scrollMaxX,
      scrollMaxY
    };
    onScroll && onScroll(scrollProps);

    this.layerConfigs.forEach(({ left, top, props }) => {
      const {
        speedX,
        speedY,
        pinned,
        inputMode = "speed",
        xExpr,
        yExpr
      } = props;
      let newLeft = 0,
        newTop = 0;
      if (inputMode === "speed") {
        newTop = (scrollPosition * speedY) / 10;
        newLeft = (scrollPosition * speedX) / 10;
        // console.log(props, left, top, newLeft, newTop);
        if (pinned) {
          if (direction === "vertical") newTop = -y;
          else if (direction === "horizontal") newLeft = -x;
        }
      } else {
        // position expr
        newTop = math.eval(yExpr, scrollProps);
        newLeft = math.eval(xExpr, scrollProps);
        // console.log(scope, "newTop", newTop, "lastY", this.lastY);
      }

      top.set(newTop);
      left.set(newLeft);
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
