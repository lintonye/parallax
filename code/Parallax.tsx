import * as React from "react";
import { Scroll, ControlType } from "framer";
import EmptyConnector from "./EmptyConnector";

interface Props {
  direction: "horizontal" | "vertical";
}

export class Parallax extends React.Component<Props> {
  static displayName = "Parallax Scroll";

  state = {
    pageX: 0,
    pageY: 0
  };
  handleScroll = e => {
    this.setState({ pageX: e.x, pageY: e.y });
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

  cloneAndOffsetParallaxFramesElements = (elements = []) =>
    elements.map(e => {
      const { componentIdentifier } = e.props;
      if (
        componentIdentifier &&
        componentIdentifier.includes("ParallaxFrame")
      ) {
        const { speed, direction } = e.props.children[0].props;
        const scrollPosition =
          this.props.direction === "vertical"
            ? this.state.pageY
            : -this.state.pageX;
        const translateY = (scrollPosition * speed) / 10;
        const translateX = (-scrollPosition * speed) / 10;
        const vertical = { top: translateY };
        const horizontal = { left: translateX };
        const style =
          direction === "vertical"
            ? vertical
            : direction === "horizontal"
              ? horizontal
              : { ...horizontal, ...vertical };

        return this.cloneAndOffsetParallaxFrames(e, { style });
      } else {
        return this.cloneAndOffsetParallaxFrames(e);
      }
    });

  cloneAndOffsetParallaxFrames = (e, props = null) =>
    React.cloneElement(
      e,
      props,
      this.cloneAndOffsetParallaxFramesElements(e.props.children)
    );

  render() {
    const rootElement = this.props.children[0];
    // console.log(rootElement);

    if (rootElement) {
      return (
        <Scroll {...this.props} onMove={this.handleScroll}>
          {this.cloneAndOffsetParallaxFrames(rootElement)}
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
