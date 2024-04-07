# Brazil mentioned [![npm version](https://badge.fury.io/js/brazil-mentioned.svg)](https://badge.fury.io/js/brazil-mentioned)

A simple (but effective!) web component brazil map SVG with strokes and paths delimiting it's states. This web component is agnostic to any web js framework.

![brazil-mentioned](https://i.imgur.com/qRZB3WS.gif)

![This is Brazil](https://i.pinimg.com/originals/a3/2c/1c/a32c1cc8d2b448fb64c1a1fec01e570f.jpg)

---

## Installation

You can either install using a js package manager of your choice or use the official CDN distribution

### via npm

```sh
npm i brazil-mentioned
```

### via yarn

```sh
yarn add brazil-mentioned
```

### via CDN

CDN link via jsDelivr

UMD:

```link
https://cdn.jsdelivr.net/npm/brazil-mentioned/dist/brazil-mentioned.umd.min.js
```

ES:

```link
https://cdn.jsdelivr.net/npm/brazil-mentioned/dist/brazil-mentioned.es.min.js
```

**NOTE**: The nature of this package is to provide an agnostic web component to work with any other framework and even vanilla js, plus html + css projects, and due to this the `lit` library is imported within the CDN bundle and this can cause bugs if you use another version of lit in your project, the recommended way to use this package in a other lit project is via package manager because they can deduplicate libs and handle this scenario better than a CDN. Otherwise ignore this note if you don't plan to use lit in your project alongside this package.

## Basic Usage

To use the component in your project, first you need to reference the bundle of the lib in your index.html file or the one you wanna use it.

```html
<!-- CDN -->
<script type="module" src="https://cdn.jsdelivr.net/npm/brazil-mentioned/dist/brazil-mentioned.umd.min.js"></script>

<!-- Node modules package -->
<script type="module" src="path-to-your/node_modules/brazil-mentioned/dist/brazil-mentioned.umd.min.js"></script>
```

Then just put the just put the `brazil-component` selector in a `html` page and Voilà! You're done.

```html
<brazil-component id="webrazil"></brazil-component>
```

### Properties

- **hidden-states**: `boolean` - Determine whether or not the states acronyms will be displayed
- **static**: `boolean` - Determine whether or not the map will react to mouse events

To use custom properties, these booleans for example, just insert like a html property in the selector and by default it will be treated like a truthy value internally by lit.

```html
<brazil-component id="webrazil" hidden-states static></brazil-component>
```

### Events

By default, if no static state is applied, a few mouse events occur naturally like the hover over the states strokes and paths in the internal `svg`, and a custom event is dispatched when some path is clicked.

- **onStateSelected**: `CustomEvent<string>` - Dispatch the selected state on the SVG as a custom event. The value is the state acronym `string`(like SP).

```html
<brazil-component id="webrazil" hidden-states static></brazil-component>

<!-- Adding a event listener to the custom element -->
<script>
    const element = document.querySelector('#webrazil');

    element.addEventListener('onStateSelected', (event) => {
        const { detail: state } = event;

        console.log(state) // RJ;
    });
</script>
```

### Custom styles

This table shows the correlation variables related to the Brazilian style in your application, both in the light and dark versions. Default colors are used when there are no specific replacements for the dark colors scheme. The dark palette is used when the system has a preferred dark option and to make sure the component serve this two palettes, the variables listed below exists with the `--dark` suffix so that you can customize the two palettes in your way and style

| Variable                         | Description                            | Default (Light) | Default (Dark) |
|----------------------------------|--------------------------------------|----------------|---------------|
| `--brazil-bg-color`              | Background color of the map               | `#ccc`         | `#424242`     |
| `--brazil-bg-hover-color`        | Hover color of the states | `#424242` | `#fff`        |
| `--brazil-stroke-color`          | Stroke colors that delimits the states            | `#424242`      | `#fff`        |
| `--brazil-stroke-hover-color`    | Hover color of the stroke when the state is hovered | `#fff`   | `#424242`     |
| `--brazil-acronym-color`         | Brazil states acronym color              | `#424242`      | `#fff`        |
| `--brazil-acronym-hover-color`   | Brazil states hover acronym color  | `#fff`        | `#424242`     |
| `--brazil-acronym-font-family`   | Font family of the brazil states acronym  | `Tahoma, Arial, sans-serif` | `Tahoma, Arial, sans-serif` |
