# disable-chrome-ptr

Disables mobile Chrome's native pull-to-refresh and returns a function to re-enable it.

[View the demo.](https://m59peacemaker.github.io/browser-disable-chrome-ptr/)

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

// to disable it but keep the annoying glow (why?!)
disableChromePtr({ disablePullGlow: false })

// re-enable it
enableChromePtr()
```
