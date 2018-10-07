import * as React from "react";
import { PropertyControls, ControlType, Frame } from "framer";
import EmptyConnector from "./EmptyConnector";

interface Props {
  speed: number;
  direction: string;
}

export class ParallaxFrame extends React.Component {
  static displayName = "Parallax Layer";
  static defaultProps = {
    speed: 0,
    direction: "vertical"
  };
  static propertyControls: PropertyControls<Props> = {
    speed: {
      type: ControlType.Number,
      title: "Speed",
      min: -50,
      max: 50
    },
    direction: {
      type: ControlType.SegmentedEnum,
      title: "Direction",
      options: ["horizontal", "vertical"]
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
