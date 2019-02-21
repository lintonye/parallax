import * as React from "react";
import { PropertyControls, ControlType, transform, Frame } from "framer";

const style: React.CSSProperties = {
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: "#8855FF",
  background: "rgba(136, 85, 255, 0.1)",
  overflow: "hidden"
};

// Define type of property
interface Props {
  text: string;
  progress: number;
}

class IPadSvgComp extends React.Component<Props> {
  state = {
    outerEdgeLen: 0,
    innerEdgeLen: 0,
    cameraLen: 0,
    homeLen: 0
  };
  outerEdge = null;
  innerEdge = null;
  camera = null;
  home = null;

  // Set default properties
  static defaultProps = {
    text: "Hello World!",
    progress: 0
  };

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    text: { type: ControlType.String, title: "Text" },
    progress: { type: ControlType.Number, title: "Progress", min: 0, max: 99 }
  };
  componentDidMount = () => {
    this.setState({
      outerEdgeLen: this.outerEdge.getTotalLength(),
      innerEdgeLen: this.innerEdge.getTotalLength(),
      cameraLen: this.camera.getTotalLength(),
      homeLen: this.home.getTotalLength()
    });
  };

  modulate = (inputRange, outRange) => {
    const { progress } = this.props;
    //// hmm.. transform seems to be buggy. I'd rather just use my own function
    // return transform(
    //   [{ p: inputRange[0] }, { p: inputRange[1] }],
    //   [{ o: outRange[0] }, { o: outRange[1] }],
    //   { limit: true }
    // )({ p: progress }).o;
    const map = (value, inputRange, outputRange) => {
      const maxIn = Math.max(inputRange[0], inputRange[1]);
      const minIn = Math.min(inputRange[0], inputRange[1]);
      if (value < minIn) return outputRange[0];
      if (value > maxIn) return outputRange[1];
      const ratio = (outputRange[1] - outputRange[0]) / (maxIn - minIn);
      return outputRange[0] + (value - minIn) * ratio;
    };

    return map(progress, inputRange, outRange);
  };

  render() {
    const { outerEdgeLen, innerEdgeLen, cameraLen, homeLen } = this.state;

    const outerEdgeOffset = this.modulate([0, 50], [outerEdgeLen, 0]);
    const innerEdgeOffset = this.modulate([20, 80], [innerEdgeLen, 0]);
    const cameraOffset = this.modulate([80, 90], [cameraLen, 0]);
    const homeOffset = this.modulate([90, 99], [homeLen, 0]);

    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="600">
        <path
          d="M 122 314.5 L 553 108 C 559 106.5 567.5 105 582 110.5 L 878.5 220.5 C 886.5 224 884 231 879 234 L 461.5 470 C 448 477.5 436.5 479 426 474 L 122 326.5 C 116.5 321 118 318.5 122 314.5 Z"
          fill="transparent"
          strokeWidth="3"
          stroke="white"
          ref={r => (this.outerEdge = r)}
          strokeDasharray={outerEdgeLen}
          strokeDashoffset={outerEdgeOffset}
        />
        <path
          d="M 168 308 L 546 125 L 839 237 L 461.5 447 Z"
          fill="transparent"
          stroke="white"
          ref={r => (this.innerEdge = r)}
          strokeDasharray={innerEdgeLen}
          strokeDashoffset={innerEdgeOffset}
        />
        <path
          d="M 703.5 168 C 705.985 168 708 169.343 708 171 C 708 172.657 705.985 174 703.5 174 C 701.015 174 699 172.657 699 171 C 699 169.343 701.015 168 703.5 168 Z"
          fill="transparent"
          stroke="white"
          ref={r => (this.camera = r)}
          strokeDasharray={cameraLen}
          strokeDashoffset={cameraOffset}
        />
        <path
          d="M 286 379 C 293.18 379 299 382.582 299 387 C 299 391.418 293.18 395 286 395 C 278.82 395 273 391.418 273 387 C 273 382.582 278.82 379 286 379 Z"
          fill="transparent"
          stroke="white"
          ref={r => (this.home = r)}
          strokeDasharray={homeLen}
          strokeDashoffset={homeOffset}
        />
      </svg>
    );
  }
}

export const IPadSvg = IPadSvgComp;
