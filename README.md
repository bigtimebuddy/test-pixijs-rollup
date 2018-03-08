# Rollup + PixiJS v4

This is a simple boilerplate for using Rollup with PixiJS v4.

## Usage

Install node_modules:

```
npm install
```

Build using Rollup:

```
npm test
```

Open index.html in a Browser.

## Gotchas

There are a few known issues:

- Building will Rollup will throw three known warnings with the **pixi.js** module:
    - (!) Circular dependency
    - (!) Circular dependency
    - (!) Module level directives cause errors when bundled, 'use restrict' was ignored.
- In **rollup.config.js**, it's important to defined the exports for **pixi.js** in the configuration options for **rollup-plugin-commonjs**.
