import { Data, animate, Override, Animatable } from "framer";
import { scrollOverrides } from "./Parallax";

const data = Data({ visible: true });

const overrides = scrollOverrides(
  [200, 500],
  [
    {
      op: getData => props => {
        console.log("called, vy=", props.vy);
        data.visible = true; //!data.visible;
      }
    }
  ]
);

export const Scroll: Override = props => overrides.scroll(props);
export const Frame: Override = props => ({ visible: data.visible });
// export const Scroll:Override = props=>overrides.scroll(props);
