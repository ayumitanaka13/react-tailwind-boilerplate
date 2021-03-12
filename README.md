# Getting Started with Create React App with TailwindCSS

### `create-react-app {app-name} --use-npm`

### `cd {app-name}`

### `npm i -D tailwindcss postcss-cli autoprefixer`

### `npx tailwind init --full`

This is the full of tailwind.config.js file. Change the file name as "tailwind-default.config.js" and use it as a reference.

### `npx tailwind init`

This is the empty tailwind.config.js file. Add your customized tailwindCSS variable on this file.

### `touch postcss.config.js`

In this file, write like this.

```
const tailwindcss = require("tailwindcss");

module.exports = {
    plugins: [
        tailwindcss("./tailwind.config.js"),
        require("autoprefixer"),
    ],
};
```

### Make a directry named {assets} in the src directry.

### Make a css file named {main.css} in the assets directry.

### Make a css file named {tailwind.css} in the assets directry.

In this file, write like this.

```
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```

### Modify package.json

In this file, write like this.

```
"scripts": {
    "start": "npm run watch:css && react-scripts start",
    "build": "npm run build:css && react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "build:css": "postcss src/assets/tailwind.css -o src/assets/main.css",
    "watch:css": "postcss src/assets/tailwind.css -o src/assets/main.css"
}
```

### `npm start`

Compile start. Having a full of normalize CSS on main.css

# Wanna customize more?

If you want to

- delete unnecessary normalize CSS classes
- apply some base styles to specific elements
- directive to extract common utility patterns to CSS component classes

Check develop branch!
[develop](https://github.com/ayumitanaka13/react-tailwind-boilerplate/tree/develop)
