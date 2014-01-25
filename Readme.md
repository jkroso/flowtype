
# flowtype

keep font-size in proportion with its containers size

## Installation

With your favourite package manager:

- [packin](//github.com/jkroso/packin): `packin add result`
- [component](//github.com/component/component#installing-packages): `component install jkroso/result`
- [npm](//npmjs.org/doc/cli/npm-install.html): `npm install result`

then in your app:

```js
var flowtype = require('flowtype')
```

## API

### flowtype(el, [options])

set flowtype up on `el` taking an optional `options` object. Possible settings are:

  - min: desired font size in pixels when at `el`'s `min-width`
  - max: desired font size in pixels when at `el`'s `max-width`
  - minWidth: overrides `el`'s real `min-width`
  - maxWidth: overrides `el`'s real `max-width`
  - lineRatio: size of `line-height` relative to the `font-size`. defaults to `1.45`

## Running the example

Just run `make` and navigate your browser to it.

## Thanks

This is based on [flowtype.js](http://simplefocus.com/flowtype/) by simple focus.