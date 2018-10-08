import * as React from "react";
import { PropertyControls, ControlType, Frame, Animatable } from "framer";
import EmptyConnector from "./EmptyConnector";
import { RegisterContext } from "./RegisterContext";

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
  layerConfig = {
    left: Animatable(0),
    top: Animatable(0),
    props: null
  };
  constructor(props) {
    super(props);
    this.layerConfig.props = props;
  }
  componentWillMount = () => {
    const { registerLayer } = this.props;
    if (registerLayer) {
      registerLayer(this.layerConfig);
    }
  };
  componentWillUnmount = () => {
    const { unregisterLayer } = this.props;
    if (unregisterLayer) {
      unregisterLayer(this.layerConfig);
    }
  };
  render() {
    return (
      <Frame
        {...this.props}
        background={null}
        left={this.layerConfig.left}
        top={this.layerConfig.top}
      >
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
    const { children, ...restProps } = this.props;
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
          {({ registerLayer, unregisterLayer }) => {
            return (
              <ParallaxLayerRegistrar
                {...restProps}
                registerLayer={registerLayer}
                unregisterLayer={unregisterLayer}
              >
                {children}
              </ParallaxLayerRegistrar>
            );
          }}
        </RegisterContext.Consumer>
      );
    }
  }
}
