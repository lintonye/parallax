import { Data, animate, Override, Animatable, transform } from "framer";
import { scrollOverrides, modulate, speedY } from "./ScrollOverrides";

const data = Data({
  phoneNameSizeOpacity: Animatable(0),
  feature1Opacity: Animatable(0),
  feature2Opacity: Animatable(0),
  feature3Opacity: Animatable(0),
  feature4Opacity: Animatable(0),
  feature5Opacity: Animatable(0)
});

const overrides = scrollOverrides(
  [0, 200],
  [
    { id: "blocker", op: modulate("opacity", [0, 1]) }
    // {
    //   id: "iPhoneXR",
    //   op: [modulate("scale", [1.5, 1.5]), modulate("rotationY", [30, 30])]
    // }
  ],
  [100, 350],
  [
    {
      id: "iPhoneXR",
      op: speedY(2)
    }
  ],
  [250, 400],
  [
    {
      id: "iPhoneXR",
      op: [modulate("scale", [1, 0.5])]
    }
  ]
  // [300, 400],
  // [
  //   {
  //     id: "iPhoneXR",
  //     op: [
  //       // modulate("rotationY", [50, 0]),
  //       // modulate("rotationX", [10, 0]),
  //       modulate("scale", [0.8, 0.5])
  //     ]
  //   }
  // ]
  //   [300],
  //   [
  //     {
  //       op: ({ vy }) => {
  //         animate(data.phoneNameSizeOpacity, vy < 0 ? 1 : 0);
  //       }
  //     }
  //   ],
  //   [300, 600],
  //   [{ id: ["iPhoneXR", "phoneNameSize"], op: stickyY() }],
  //   [300, 320],
  //   [{ id: "feature1", op: modulate("opacity", [0, 1], data.feature1Opacity) }],
  //   [320, 340],
  //   [{ id: "feature2", op: modulate("opacity", [0, 1], data.feature2Opacity) }],
  //   [340, 360],
  //   [{ id: "feature3", op: modulate("opacity", [0, 1], data.feature3Opacity) }],
  //   [360, 380],
  //   [{ id: "feature4", op: modulate("opacity", [0, 1], data.feature4Opacity) }],
  //   [380, 400],
  //   [{ id: "feature5", op: modulate("opacity", [0, 1], data.feature5Opacity) }],
  //   [410],
  //   [
  //     {
  //       op: async ({ vy }) => {
  //         const targetOpacity = vy > 0 ? 1 : 0;
  //         animate.ease(data.feature1Opacity, targetOpacity, { duration: 0.2 });
  //         animate.ease(data.feature2Opacity, targetOpacity, { duration: 0.2 });
  //         animate.ease(data.feature3Opacity, targetOpacity, { duration: 0.2 });
  //         animate.ease(data.feature4Opacity, targetOpacity, { duration: 0.2 });
  //         animate.ease(data.phoneNameSizeOpacity, targetOpacity, {
  //           duration: 0.2
  //         });
  //         await animate.ease(data.feature5Opacity, targetOpacity, {
  //           duration: 0.2
  //         }).finished;
  //         // the rest of the animation
  //       }
  //     }
  //   ],
  //   [410, 430],
  //   [
  //     {
  //       id: [
  //         "allScreenMakeDifference",
  //         "iphoneXR",
  //         "iphone8",
  //         "iphoneXRTitle",
  //         "iphone8Title"
  //       ],
  //       op: stickyY()
  //     }
  //   ]
);

export const Scroll: Override = props => overrides.scroll(props);
export const Blocker: Override = props => overrides.blocker(props);
export const IPhoneXR: Override = props => ({
  ...overrides.iPhoneXR(props),
  perspective: 1000
  // rotationX: 10 // TODO why is this needed?
});
