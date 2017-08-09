# disable-chrome-ptr

Disables mobile Chrome's native pull-to-refresh and returns a function to re-enable it.

## install

```sh
$ npm install disable-chrome-ptr
```

## example

```js
import disableChromePtr from 'disable-chrome-ptr'
import bowser from 'bowser' // for checking what platform this is running on

// disable it for mobile chrome
const enableChromePtr = (bowser.mobile && bowser.chrome) ? disableChromePtr() : () => {}

// re-enable it
enableChromePtr()
```
