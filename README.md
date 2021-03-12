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
&nbsp;plugins: [
&emsp;tailwindcss("./tailwind.config.js"),
&emsp;require("autoprefixer"),
&nbsp;],
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
&nbsp;"start": "npm run watch:css && react-scripts start",
&nbsp;"build": "npm run build:css && react-scripts build",
&nbsp;"test": "react-scripts test",
&nbsp;"eject": "react-scripts eject",
&nbsp;"build:css": "postcss src/assets/tailwind.css -o src/assets/main.css",
&nbsp;"watch:css": "postcss src/assets/tailwind.css -o src/assets/main.css"
}
```

### `npm start`

Compile start. Having a full of normalize CSS on main.css
