import disableChromePtr from './'
import bowser from 'bowser'

const enableChromePtr = (bowser.mobile && bowser.chrome) ? disableChromePtr() : () => {}
