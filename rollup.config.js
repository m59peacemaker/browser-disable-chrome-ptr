import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

const Plugins = () => [
  resolve({
    module: true, browser: true, jsnext: true, main: true, extensions: [ '.js', '.json' ]
  }),
  commonjs()
]

export default [
  {
    entry: 'src/disable-chrome-ptr.mjs',
    dest: 'build/disable-chrome-ptr.cjs.js',
    format: 'cjs',
    plugins: Plugins()
  }
]
