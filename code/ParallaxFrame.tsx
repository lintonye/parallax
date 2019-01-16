import * as React from "react";
import { PropertyControls, ControlType, Frame, Animatable } from "framer";
import { EmptyConnector } from "./EmptyConnector";
import { RegisterContext } from "./RegisterContext";

interface Props {
  inputMode: "position" | "speed";
  speedX: number;
  speedY: number;
  xExpr: string;
  yExpr: string;
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
  componentDidMount() {
    const { registerLayer } = this.props;
    if (registerLayer) {
      this.layerConfig.props = this.props;
      registerLayer(this.layerConfig);
    }
  }
  componentWillUnmount() {
    const { unregisterLayer } = this.props;
    if (unregisterLayer) {
      unregisterLayer(this.layerConfig);
    }
  }
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
    inputMode: "speed",
    speedX: 0,
    speedY: 0,
    xExpr: "0",
    yExpr: "0",
    pinned: false
  };
  static propertyControls: PropertyControls<Props> = {
    inputMode: {
      type: ControlType.SegmentedEnum,
      title: "Input",
      options: ["speed", "position"],
      optionTitles: ["Speed", "Position Expr"]
    },
    pinned: {
      type: ControlType.Boolean,
      title: "Pin in scroll direction",
      hidden: ({ inputMode }) => inputMode !== "speed"
    },
    speedX: {
      type: ControlType.Number,
      min: -50,
      max: 50,
      title: "Speed X",
      hidden: ({ inputMode }) => inputMode !== "speed"
    },
    speedY: {
      type: ControlType.Number,
      min: -50,
      max: 50,
      title: "Speed Y",
      hidden: ({ inputMode }) => inputMode !== "speed"
    },
    xExpr: {
      type: ControlType.String,
      title: "X",
      hidden: ({ inputMode }) => inputMode !== "position"
    },
    yExpr: {
      type: ControlType.String,
      title: "Y",
      hidden: ({ inputMode }) => inputMode !== "position"
    }
  };
  render() {
    const { children, ...restProps } = this.props;
    if (React.Children.count(children) === 0) {
      return (
        <EmptyConnector
          title="Parallax Layer"
          description='Connect to a frame and adjust the "speed" prop in the properties panel'
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
