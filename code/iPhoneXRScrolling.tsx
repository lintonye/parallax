import { Data, animate, Override, Animatable, transform } from "framer";
import { scrollOverrides, modulate, speedY, stickyY } from "./ScrollOverrides";

const data = Data({
  phoneNameSizeOpacity: Animatable(0)
});

const overrides = scrollOverrides(
  [0, 200],
  { id: "blocker", op: modulate("opacity", [0, 1]) },
  [100, 350],
  [
    {
      id: "iPhoneXR",
      op: speedY(2)
    }
  ],
  [300, 750],
  [
    {
      id: "iPhoneXR",
      op: modulate("scale", [1.5, 1])
    }
  ],
  [400, 500],
  [{ id: "phoneNameSize", op: modulate("top", [850, 850]) }],
  [500, 1050],
  [
    {
      id: "iPhoneXR",
      op: stickyY()
    },
    { id: "phoneNameSize", op: stickyY() }
  ],
  [750, 800],
  [
    {
      op: getData => ({ vy }) => {
        animate.ease(data.phoneNameSizeOpacity, vy > 0 ? 1 : 0, {
          duration: 0.2
        });
      }
    }
  ],
  [0, 3000],
  [{ id: "featureContainer", op: modulate("top", [1180, 1180]) }],
  [800, 850],
  [{ id: "feature1", op: modulate("opacity", [0, 1]) }],
  [850, 900],
  [{ id: "feature2", op: modulate("opacity", [0, 1]) }],
  [900, 950],
  [{ id: "feature3", op: modulate("opacity", [0, 1]) }],
  [950, 1000],
  [{ id: "feature4", op: modulate("opacity", [0, 1]) }],
  [1000, 1050],
  [{ id: "feature5", op: modulate("opacity", [0, 1]) }]
);

export const Scroll: Override = props => overrides.scroll(props);
export const Blocker: Override = props => overrides.blocker(props);
export const IPhoneXR: Override = props => overrides.iPhoneXR(props);

export const PhoneNameSize: Override = props => ({
  ...overrides.phoneNameSize(props),
  opacity: data.phoneNameSizeOpacity
});

export const FeatureContainer: Override = props =>
  overrides.featureContainer(props);

export const Feature1: Override = props => overrides.feature1(props);
export const Feature2: Override = props => overrides.feature2(props);
export const Feature3: Override = props => overrides.feature3(props);
export const Feature4: Override = props => overrides.feature4(props);
export const Feature5: Override = props => overrides.feature5(props);
