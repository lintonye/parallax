import * as React from "react";
import { PropertyControls, ControlType, Frame, Animatable } from "framer";
import EmptyConnector from "./EmptyConnector";
import RegisterContext from "./RegisterContext";

interface Props {
  speedX: number;
  speedY: number;
  pinned: boolean;
}

interface RegistrarProps {
  registerLayer: (layerConfig) => any;
  unregisterLayer: (layerConfig) => any;
}

class ParallaxLayerRegistrar extends React.Component<RegistrarProps> {
  registerLayer = props => {
    const { left: originLeft, top: originTop, registerLayer } = props;
    this.left = Animatable(originLeft);
    this.top = Animatable(originTop);
    registerLayer({
      left: this.left,
      top: this.top,
      props,
      originLeft,
      originTop
    });
  };
  componentDidMount = () => {
    this.registerLayer(this.props);
  };
  render() {
    return (
      <Frame {...this.props} background={null} left={this.left} top={this.top}>
        {this.props.children}
      </Frame>
    );
  }
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
        <RegisterContext.Consumer>
          {({ registerLayer, unregisterLayer }) => (
            <ParallaxLayerRegistrar
              {...this.props}
              registerLayer={registerLayer}
              unregisterLayer={unregisterLayer}
            >
              {children}
            </ParallaxLayerRegistrar>
          )}
        </RegisterContext.Consumer>
      );
    }
  }
}
