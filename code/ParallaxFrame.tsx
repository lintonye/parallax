import * as React from "react";
import { PropertyControls, ControlType, Frame } from "framer";
import EmptyConnector from "./EmptyConnector";

interface Props {
  speedX: number;
  speedY: number;
  pinned: boolean;
}

export class ParallaxFrame extends React.Component {
  static displayName = "Parallax Layer";
  static defaultProps = {
    speedX: 0,
    speedY: 0,
    pinned: false
  };
  static propertyControls: PropertyControls<Props> = {
    pinned: {
      type: ControlType.Boolean,
      title: "Pinned in scroll direction"
    },
    speedX: {
      type: ControlType.Number,
      min: -50,
      max: 50,
      title: "Speed X"
    },
    speedY: {
      type: ControlType.Number,
      min: -50,
      max: 50,
      title: "Speed Y"
    }
  };
  render() {
    const { children } = this.props;
    if (React.Children.count(children) === 0) {
      return (
        <EmptyConnector
          title="Parallax Layer"
          description="Connect to a frame and adjust the &quot;speed&quot; prop in the properties panel"
        />
      );
    } else {
      return (
        <Frame {...this.props} background={null}>
          {children}
        </Frame>
      );
    }
  }
}
