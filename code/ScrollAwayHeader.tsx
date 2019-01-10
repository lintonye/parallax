import { Data, animate, Override, Animatable } from "framer";

const data = Data({ headerTop: Animatable(0) });

let isAnimating = false;

async function setHeaderTop(animation) {
  if (!isAnimating) {
    isAnimating = true;
    await animation.finished;
    isAnimating = false;
  }
}

export const Scroll: Override = () => {
  return {
    onScroll({ s, vy }) {
      if (vy < 0) {
        setHeaderTop(
          animate.ease(data.headerTop, -81, {
            duration: 0.1
          })
        );
      } else if (vy > 0 || s >= 0) {
        setHeaderTop(animate.ease(data.headerTop, 0, { duration: 0.1 }));
      }
    }
  };
};

export const Top: Override = () => {
  return {
    top: data.headerTop
  };
};
