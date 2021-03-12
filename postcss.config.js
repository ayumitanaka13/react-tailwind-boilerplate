const tailwindcss = require("tailwindcss");

module.exports = {
  plugins: [
    tailwindcss("./tailwind.config.js"),
    require("autoprefixer"),
    // require("@fullhuman/postcss-purgecss")({
    //   content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    //   defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    // }),
  ],
};
