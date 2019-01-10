import { Data, animate, Override, Animatable } from "framer";

const data = Data({ headerTop: Animatable(0) });

let isAnimating = false;

async function setHeaderTop(top) {
  if (!isAnimating) {
    isAnimating = true;
    await animate.ease(data.headerTop, top, { duration: 0.1 }).finished;
    isAnimating = false;
  }
}

export const Scroll: Override = () => {
  return {
    onScroll({ s, vy, scrollMax }) {
      const headerHeight = 81;
      if (vy > 0 && s > -scrollMax) {
        setHeaderTop(0);
      } else if (vy < 0 && s <= -headerHeight) {
        setHeaderTop(-headerHeight);
      }
    }
  };
};

export const Top: Override = () => {
  return {
    top: data.headerTop
  };
};
