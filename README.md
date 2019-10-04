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

Demo file:

- https://www.dropbox.com/s/6tpjipqxyftbz1v/parallax-webinar.framerx?dl=0

# Getting started

- Non-coding:
  1. Drop a `ParallaxScroll` and connect with the entire scroll content. The usage is exactly the same as the standard `Scroll` component.
  2. Drop a few `ParallaxLayer` and connect them with respective content
  3. Tweak the parameters of a `ParallaxLayer` in the properties panel 
  4. Profit!

- Code overrides:
  1. Drop a `ParallaxScroll` and connect with the entire scroll content. The usage is exactly the same as the standard `Scroll` component.
  2. Add an override to any Frames in the scroll content (details below)
  4. Profit!

# Code overrides
## A simple example: make an item sticky

![sticky](https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fsticky.gif?1547676401227)

```js
import {
  scrollOverrides,
  modulate,
  speed,
  sticky
} from "@framer/lintonye.parallax/code/Parallax";

// Define custom scrolling behavior
const overrides = scrollOverrides(
  [100, 200],  // scrolling range
  { id: "sticky100200", op: sticky() } // custom behavior
)

// Define code overrides
//   1. There will always be a "overrides.scroll" function
//   2. Note "overrides.sticky100200" comes from the "id" above
//   3. Don't forget to call the functions and pass along the "props" parameter.
export const Scroll : Override = props => overrides.scroll(props);
export const Sticky100200 : Override = props => overrides.sticky100200(props);
```

## Make an item sticky and then fades away

![sticky and fade](https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fsticky-then-fade.gif?1547676313324)

```js
const overrides = scrollOverrides(
  [100, 200], 
  { id: "sticky100200", op: sticky() },
  [200, 500], 
  { id: "sticky100200", op: modulate('opacity', [1, 0]) }
)
```

## Move an item move at a different speed

![speed](https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fspeed.gif?1547676135337)

```js
const overrides = scrollOverrides(
  [0, 1000], 
  [
    { id: "speed0", op: speed(0) },
    { id: "speed05", op: speed(0.5) },
    { id: "speedminus1", op: speed(-1) },
    { id: "speedminus2", op: speed(-2) },
    { id: "speed1", op: speed(1) }
  ]
)
```

## Trigger an animation when scrolling into a range

![trigger](https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Ftrigger.gif?1547676228710)

```js
const overrides = scrollOverrides(
  [600, 650],
  {
    // This function will only be executed once per direction when
    // the scrolling position falls into the range specified above.
    // i.e. scrolling down, it'll be called, but if keep scrolling down,
    // it won't be called anymore. But if scrolling up at this point,
    // it'll be called again.
    //
    // Don't forget the "getData =>" in the front!
    op: getData => ({ vy }) => {
      // vy: the velocity of scrolling in y direction
      //   vy > 0: scrolling down
      //   vy < 0: scrolling up
      animate.spring(data.rotation, vy > 0 ? 180 : 0);
    }
  }
)
```

# Contact
Find me on Twitter [@lintonye](https://twitter.com/lintonye)!

# Change Log
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
