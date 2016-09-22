
# flowtype

keep font-size in proportion with its containers size

## Installation

`npm install flowtype`

then in your app:

```js
var flowtype = require('flowtype')
```

## API

### flowtype(el, [options])

setup flowtype on `el` taking an optional `options` object. Possible settings are:

  - min: desired font size in pixels when at `el`'s `min-width`
  - max: desired font size in pixels when at `el`'s `max-width`
  - minWidth: overrides `el`'s real `min-width`
  - maxWidth: overrides `el`'s real `max-width`
  - lineRatio: size of `line-height` relative to the `font-size`. defaults to `1.45`

```js
flowtype(document.body, {
  maxWidth: '800px', // can be a CSS value or a Number
  minWidth: '300px',
  lineRatio: 1.45,
  min: 14,
  max: 22
})
```

In the above example when the document is `800px` or wider flowtype will set the font size to `22px`. When the document is `300px` or less it will be set the font size to `14px`. And when the document is at any width between `300px` and `800px` it will set the font size to match proportionally. e.g. if the document was `500px` wide thats 40% of the distance from `300px` to `800px` so the font size will be set to 40% of the distance from `14px` to `22px` which is `17.2px`.

Note: flowtype sets font size in pixels on the `el` you passed in. So you need to ensure that any children inside `el` have their font set in `em`s. Unless you want their font size to stay fixed.

## Running the example

Just run `make` and navigate your browser to it.

## Thanks

This is based on [flowtype.js](http://simplefocus.com/flowtype/) by simple focus.