# Overview

![sticky-headers](https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fsticky-scroll.gif?1548273386530)

![iphoneXR](https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2FiPhoneXR.gif?1548081080925)

![svgtracing](https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fsvg-tracing.gif?1548081080531)

This module makes it easy to create advanced scroll interactions. There are two ways of using the module:

- Non-coding: just drag and drop components, you'll be able to control the speed, opacity, rotation, scale etc. of a layer when scrolling.
- Code overrides: a lot more control and flexibility (see below)!

Check out some quick demos: 

- https://twitter.com/lintonye/status/1084845396164112385
- https://twitter.com/lintonye/status/1042262028339933184

Demo File:

- https://www.dropbox.com/s/w9fr8ggsktuiyp8/parallax-demo.framerx?dl=0


# Getting started

- Non-coding:
  1. Drop a `ParallaxScroll` and connect with the entire scroll content. The usage is exactly the same as the standard `Scroll` component.
  2. Drop a few `ParallaxLayer` and connect them with respective content
  3. Tweak the parameters of a `ParallaxLayer` in the properties panel 
  4. Profit!

- Code overrides:
  1. Drop a `ParallaxScroll` and connect with the entire scroll content. The usage is exactly the same as the standard `Scroll` component.
  2. Add an override to any Frames in the scroll content (details below). Yes, it doesn't have to be `ParallaxLayer`!
  4. Profit!

# Code overrides

## A simple example: make an item sticky

![sticky](https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fsticky.gif?1547676401227)

```js
import { useSticky, useScroll } from "@framer/lintonye.parallax/code"

export function Sticky100400(): Override {
  // scrollY here is a MotionValue
  const { scrollY } = useScroll()
  // y is a MotionValue too
  const y = useSticky(scrollY, [100, 400])
  // This is short for { y: y }, where the first "y" is the property key, the second "y"
  // is the variable name.
  return { y }
};
```

You may see an error in Framer's code editor. This is a known bug of Framer. The override still works. Or you can edit the file with an external editor.

![import-error](https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fimport-error.png?v=1570228728674)

## Make an item sticky and then fades away

![sticky and fade](https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fsticky-then-fade.gif?1547676313324)

```js
import { useSticky, useScroll } from "@framer/lintonye.parallax/code"
import { Override, useTransform } from "framer"

export function Sticky100400(): Override {
  // scrollY here is a MotionValue
  const { scrollY } = useScroll()
  // y is a MotionValue too
  const y = useSticky(scrollY, [100, 400])
  const opacity = useTransform(scrollY, [400, 500], [1, 0])
  // short for { y: y, opacity: opacity }
  return { y, opacity }
};
```

## Move an item move at a different speed

![speed](https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fspeed.gif?1547676135337)

```js
import { useSpeed, useScroll } from "@framer/lintonye.parallax/code"

export function Speed0(): Override {
  const { scrollY } = useScroll()
  const y = useSpeed(scrollY, [0, 1000], 0)
  return { y }
};

export function Speed05(): Override {
  const { scrollY } = useScroll()
  const y = useSpeed(scrollY, [0, 1000], 0.5)
  return { y }
};

export function SpeedMinus1(): Override {
  const { scrollY } = useScroll()
  const y = useSpeed(scrollY, [0, 1000], -1)
  return { y }
};
...
```

## Trigger an animation when scrolling into a range

![trigger](https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Ftrigger.gif?1547676228710)

```js
import { useTrigger, useScroll } from "@framer/lintonye.parallax/code"
import { useAnimation } from "framer"
export const TriggerAnimation: Override = props => {
  const animate = useAnimation()
  const { scrollY } = useScroll()
  useTrigger(scrollY, [600, 650], direction => {
    animate.start({ rotate: direction > 0 ? 0 : 180 })
  })
  return {
    animate
  }
}
```

## `useSticky` and other hooks
Check out the documentation [here](https://github.com/lintonye/useParallax).

# Contact
- Find me on Twitter [@lintonye](https://twitter.com/lintonye)!
- [Share what you've built with me](https://twitter.com/intent/tweet?url=https%3A%2F%2Fstore.framer.com%2Fpackage%2Flintonye%2Fparallax&text=Just%20created%20this%20with%20the%20Parallax%20package%20by%20@lintonye%20on%20@Framer%20Store%20%5BInsert%20your%20video%20or%20GIF%5D)! I'd be so thrilled! 😍

# Change Log
- 10/08/2019
  - Add new hooks: `useTrackScrollX`, `useTrackScrollY`
- 10/04/2019
  - Update to support the latest Framer library (1.1.3)! Yay!
  - You can now control the speed, rotation, scale and opacity of a layer WITHOUT CODE!
  - React Hook based API for more advanced control
- 02/21/2019
  - Hide internal components
- 02/03/2019
  - Add support for using object as op, instead of just an array
  - Fixed: onMove op function is always called when a data item is updated inside the function body
  - Now we can return `true` to ask the next onMove op function to run. If the return value is falsy (e.g. no return value is specified), the function will be only called once per scroll direction.
- 01/29/2019
  - Fix id conflict issue. Now, as long as the ids are unique within a single `scrollOverrides` call, things should be fine.
- 01/26/2019
  - Add support for horizontal scroll. Note: you'll get an error when the scroll direction is "both".
  - Add `speed`, `sticky` and `snap` functions, which work on both horizontal and vertical directions.
- 01/23/2019
  - Fix issue in `speed` and `sticky` that causes layer to jump locations when crossing ranges
- 01/17/2019
  - Add `snapY` function
- 01/16/2019
  - Add support for advanced scroll interactions
- 01/10/2019
  - Add override functions for sticky scrolls (Doc pending)
- 10/09/2018
  - Support controlling positions with math expressions
- 10/08/2018
  - Better performance - (dev note: no more cloning of children)
- 10/07/2018
  - Better scrolling performance
  - We can now independently configure speed X and Y of a layer.
  - Pin in scroll direction
- 10/02/2018 - Support horizontal scroll
- 09/18/2018 - Use Scroll component instead of the hacky div
