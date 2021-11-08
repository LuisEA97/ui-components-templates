# UI components with HeadlessUI and TailwindCSS

This project was created with [Create React App](https://github.com/facebook/create-react-app), [TailwindCSS](https://tailwindcss.com/docs/guides/create-react-app) and [HeadlessUI](https://github.com/tailwindlabs/headlessui/tree/main/packages/%40headlessui-react).

## First steps
This project was created using npx create-react-app "[name]"

## Setting up TailwindCSS in React Project

>Note: 
>  You can find these installation steps at [TailwindCSS Documentation here](https://tailwindcss.com/docs/guides/create-react-app)

### Installing TailwindCSS via NPM:
Install Tailwind and its peer-dependencies using npm:

> You need to install PostCSS in order to allow TailwindCSS to convert js files into CSS:

Run
```
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

#### Installing and configuring CRACO
We need to install another package: CRACO to be able to configuring TailwindCSS in our project:

Run:
```
npm install @craco/craco
```

### Overriding React Scripts by Craco Scrips:
Once it’s installed, update your scripts in your package.json file to use craco instead of react-scripts for all scripts except eject:

#### Replace the following lines in `package.json`
```js
{
    /*package.json*/
    // ...
    "scripts": {
     "start": "craco start",
     "build": "craco build",
     "test": "craco test",
      "eject": "react-scripts eject"
    },
  }
```

### Create `craco.config.js`

Next, create a `craco.config.js` at the root of our project and add the `tailwindcss` and `autoprefixer` as PostCSS plugins:

#### `./craco.config.js`
```js
// ./craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}
```

### Initializing TailwindCSS
Finally, run this command in order to generate generate a `tailwind.config.js` file in our project:

```
npx tailwindcss-cli@latest init
```

Once it has done, you can see at the root of your project an additional file called `tailwind.config.js` with the following:

```js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```
#### Replace this line:
```js
module.exports = {
  purge: [],
  ...
}
```

#### By:

```js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  ...
}
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
