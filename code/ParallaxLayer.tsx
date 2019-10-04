import * as React from "react"
import {
  Frame,
  addPropertyControls,
  ControlType,
  useTransform,
  RenderTarget
} from "framer"
import { useScroll } from "."
import { EmptyConnector } from "./EmptyConnector"

function ParallaxLayerPreview({
  children,
  inputMin,
  inputMax,
  property,
  dependsOn,
  ...props
}) {
  const { scrollX, scrollY } = useScroll()
  const outputMin = props[`${property}_outputMin`]
  const outputMax = props[`${property}_outputMax`]
  const value = useTransform(
    dependsOn === "y" ? scrollY : scrollX,
    [inputMin, inputMax],
    [outputMin, outputMax]
  )
  const transformedProps = { [property]: value }
  return (
    <Frame background={null} {...transformedProps} {...props}>
      {children}
    </Frame>
  )
}

function ParallaxLayerCanvas(props) {
  return React.Children.count(props.children) > 0 ? (
    <Frame background={null} {...props} />
  ) : (
    <EmptyConnector title="Connect to a Frame →" description="" />
  )
}

function ParallaxLayerThumbnail(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="feather feather-file"
      viewBox="0 0 24 24"
    >
      <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z" />
      <path d="M13 2L13 9 20 9" />
    </svg>
  )
}

export function ParallaxLayer(props) {
  const target = RenderTarget.current()
  const Comp =
    target === RenderTarget.preview
      ? ParallaxLayerPreview
      : target === RenderTarget.thumbnail
      ? ParallaxLayerThumbnail
      : ParallaxLayerCanvas
  return <Comp {...props} />
}

const properties = {
  x: {
    x_outputMin: {
      type: ControlType.Number,
      title: "X Min"
    },
    x_outputMax: {
      type: ControlType.Number,
      title: "X Max"
    }
  },
  y: {
    y_outputMin: {
      type: ControlType.Number,
      title: "Y Min"
    },
    y_outputMax: {
      type: ControlType.Number,
      title: "Y Max"
    }
  },
  opacity: {
    opacity_outputMin: {
      type: ControlType.Number,
      min: 0,
      max: 1,
      title: "Opacity Min"
    },
    opacity_outputMax: {
      type: ControlType.Number,
      min: 0,
      max: 1,
      title: "Opacity Max"
    }
  },
  scale: {
    scale_outputMin: {
      type: ControlType.Number,
      title: "Scale Min"
    },
    scale_outputMax: {
      type: ControlType.Number,
      title: "Scale Max"
    }
  },
  rotate: {
    rotate_outputMin: {
      type: ControlType.Number,
      min: 0,
      max: 360,
      title: "Rotate Min"
    },
    rotate_outputMax: {
      type: ControlType.Number,
      min: 0,
      max: 360,
      title: "Rotate Max"
    }
  },
  backgroundColor: {
    backgroundColor_outputMin: {
      type: ControlType.Color,
      title: "BG Min"
    },
    backgroundColor_outputMax: {
      type: ControlType.Color,
      title: "BG Max"
    }
  }
}

// 1. Add "hidden" functions
// 2. Flatten properties into a shallow object
function getOutputPropertyControls() {
  return Object.keys(properties).reduce((result, propName) => {
    const controlGroup = properties[propName]
    // Flatten
    const flattened = Object.keys(controlGroup).reduce(
      (preValue, outputProp) => {
        // add "hidden" function
        const control = {
          ...controlGroup[outputProp],
          hidden: props => props.property !== propName
        }
        return { ...preValue, [outputProp]: control }
      },
      {}
    )
    return { ...result, ...flattened }
  }, {})
}

addPropertyControls(ParallaxLayer, {
  children: {
    type: ControlType.ComponentInstance,
    title: "Content"
  },
  dependsOn: {
    type: ControlType.Enum,
    options: ["x", "y"],
    defaultValue: "y"
  },
  property: {
    type: ControlType.Enum,
    options: Object.keys(properties),
    defaultValue: "rotate"
  },
  inputMin: {
    type: ControlType.Number,
    title: "Scroll Min",
    min: 0
  },
  inputMax: {
    type: ControlType.Number,
    title: "Scroll Max",
    min: 0
  },
  ...getOutputPropertyControls()
})
