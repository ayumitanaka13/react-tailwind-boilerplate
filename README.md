# Getting Started with Create React App with TailwindCSS

#### 1. Create React App with npm

`create-react-app {app-name} --use-npm`

#### 2. Move to App directory

`cd {app-name}`

#### 3. Install postcss and autoprefixer

`npm i -D tailwindcss postcss-cli autoprefixer`

#### 4. Install default tailwind config file

`npx tailwind init --full`

This is the default tailwind.config.js file. Change the file name as "tailwind-default.config.js" and use it as a reference.

#### 5. Install tailwind config file

`npx tailwind init`

This is the empty tailwind.config.js file. Add your customized tailwindCSS variable on this file.

#### 6. Create postcss config file

`touch postcss.config.js`

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

#### 7. Make a directory named {assets} in the src directory

#### 8. Make a css file named {main.css} in the assets directory

#### 9. Make a css file named {tailwind.css} in the assets directory

In this file, write like this.

```
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```

#### 10. Modify package.json

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

#### 11. Run React app and start compile tailwind.CSS to main.css

`npm start`

Run React app and start CSS compile. After compile, you can see the long lines of normalize CSS on main.css file.

# Wanna customize more?

If you want to

- delete unnecessary normalize CSS classes.
- apply some base styles to specific elements.
- directive to extract common utility patterns to CSS component classes.

## [Check develop branch!](https://github.com/ayumitanaka13/react-tailwind-boilerplate/tree/develop)

#### 12. Install @fullhuman/potcss-purgecss

`npm i @fullhuman/postcss-purgecss`

#### 13. Modify postcss.config.js

In this file, write like this.

```
const tailwindcss = require("tailwindcss");

module.exports = {
    plugins: [
        tailwindcss("./tailwind.config.js"),
        require("autoprefixer"),
        require("@fullhuman/postcss-purgecss")({
            content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
            defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        }),
    ],
};
```

Once you purged, you can't add classes that you haven't use. In this case, just comment out the purge part in plugins on postcss.config.js. When you are done, uncomment this part. You will see reduced size of main.css file.

# Wanna add dark mode?

## [Check test branch!](https://github.com/ayumitanaka13/react-tailwind-boilerplate/tree/develop)

#### Reference

[TailWind CSS Introduction](https://www.appliz.fr/blog/tailwindcss-introduction)

[How to setup Tailwind with PurgeCSS and PostCSS](https://flaviocopes.com/tailwind-setup/)
