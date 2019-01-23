# Overview

This module makes it easy to create advanced scroll interactions. There are two ways of using the module:

- Non-coding: just drag and drop components, you'll be able to move layers at different speed when scrolling.
- Code overrides: a lot more control and flexibility (see below)

Check out some quick demos: 

- https://twitter.com/lintonye/status/1084845396164112385
- https://twitter.com/lintonye/status/1049727463343812608
- https://twitter.com/lintonye/status/1042262028339933184

Demo file:

- https://www.dropbox.com/s/6tpjipqxyftbz1v/parallax-webinar.framerx?dl=0

# Getting started

- Non-coding:
  1. Just drop a few "Parallax Layer" and connect them with respective content.
  2. Drop a "Parallax Scroll" and connect with the entire scroll content.
  3. Tweak the "Speed X" and "Speed Y" parameters and profit!
- Code overrides:
  1. Add a Scroll and connect to its scrolling content. Yes, you can just use the standard Scroll component!
  2. Create a code override file that uses `scrollOverrides` to define custom scrolling behaviors. See below for examples.
  3. Add the code override to Scroll and other items.
  4. Profit!

# Properties for Non-coding usage

## Parallax Layer
- Input: _Speed_ or _Position_
  - _Speed_
    - _Pin in scrolling direction_
      - if _true_ and the _direction_ of parent _Parallax_ is _vertical_, the Y position of the layer remains the same when scrolling. It works similarly when the parent _direction_ is _horizontal_.
    - _Speed X_
      - if 0: the layer scrolls along with the rest of the content
      - if positive: the layer scrolls in the same direction as the scrolling
      - if negative: the layer scrolls in the opposite direction of the scrolling
    - _Speed Y_
      - Same as _Speed X_ but in Y direction
  - _Position_
    - _X:_ an [expression](http://mathjs.org/docs/expressions/syntax.html) that specifies the X position of the layer
      - Can be a math formula where _s_ is the scroll position
      - Examples:
        - _0_: the layer scrolls along with the rest of the content
        - _-s_: this is equivalent to _Pin in scrolling direction_ when Input is _Speed_
        - _sin(s/50)*100_: moves the layer left and then right and then left again, repeatedly
    - _Y:_ Same as _X_ but in Y direction

# Code overrides
## A simple example: make an item sticky

![sticky](https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fsticky.gif?1547676401227)

```js
import {
  scrollOverrides,
  modulate,
  speedY,
  stickyY
} from "@framer/lintonye.parallax/code/Parallax";

// Define custom scrolling behavior
const overrides = scrollOverrides(
  [100, 200],  // scrolling range
  [{ id: "sticky100200", op: stickyY() }] // custom behavior
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
  [{ id: "sticky100200", op: stickyY() }],
  [200, 500], 
  [{ id: "sticky100200", op: modulate('opacity', [1, 0]) }]
)
```

## Move an item move at a different speed

![speed](https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fspeed.gif?1547676135337)

```js
const overrides = scrollOverrides(
  [0, 1000], 
  [
    { id: "speed0", op: speedY(0) },
    { id: "speed05", op: speedY(0.5) },
    { id: "speedminus1", op: speedY(-1) },
    { id: "speedminus2", op: speedY(-2) },
    { id: "speed1", op: speedY(1) }
  ]
)
```

## Trigger an animation when scrolling into a range

![trigger](https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Ftrigger.gif?1547676228710)

```js
const overrides = scrollOverrides(
  [600, 650],
  [
    {
      // This function will only be executed once per direction when
      // the scrolling position falls into the range specified above.
      // i.e. scrolling down, it'll be called, but if keep scrolling down,
      // it won't be called anymore. But if scrolling up at this point,
      // it'll be called again.
      //
      // Don't forget the "itemId =>" in the front!
      op: itemId => ({ vy }) => {
        // vy: the velocity of scrolling in y direction
        //   vy > 0: scrolling down
        //   vy < 0: scrolling up
        animate.spring(data.rotation, vy > 0 ? 180 : 0);
      }
    }
  ]
)
```

# Contact
Find me on Twitter [@lintonye](https://twitter.com/lintonye)!

# Change Log
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
