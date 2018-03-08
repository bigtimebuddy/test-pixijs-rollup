import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';

export default {
    input: 'index.js',
    output: {
        format: 'umd',
        file: 'bundle.js'
    },
    plugins: [
        resolve(),
        builtins(),
        commonjs({
            namedExports: {
                // Gotcha: You need to
                // explicitly name the exports
                // because commonjs plugin is
                // not smart enough to work 
                // with pixi.js Browserify v4 builds
                'pixi.js': [
                    'VERSION',
                    'Application',
                    'Graphics'
                ]
            }
        }),
        // Gotcha: needs to go after commonjs
        globals()
    ]
}