# Overview

Move layers at different speed when scrolling.

Check out some quick demos: 

- https://twitter.com/lintonye/status/1049727463343812608
- https://twitter.com/lintonye/status/1042262028339933184

# Getting started

1. Just drop a few "Parallax Layer" and connect them with respective content.
2. Drop a "Parallax Scroll" and connect with the entire scroll content.
3. Tweak the "Speed X" and "Speed Y" parameters and profit!

# Properties

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

# Change Log
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
