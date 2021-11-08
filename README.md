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
Once it’s installed, update your scripts in your package.json file to use craco instead of react-scripts for all scripts except `eject` command:

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

### Final step:

#### In your react project, open `./src/index.css` and add the following:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

> 🎉 Congratulations! You have successfully installed an initialized TailwindCSS in your project. Happy coding! :)


### TailwindCSS extension for Visual Studio Code

**I highly recommend install `Tailwind CSS IntelliSense` extension in Visual Studio Code, in order to get suggestions of tailwind styles when you are coding**

## Setting up HeadlessUI

Installation is pretty simple, just run: 

>If you are in NPM:
```
npm install @headlessui/react
```

>Or if you are in Yarn:
```
yarn add @headlessui/react
```

**For documentation, go to [Headless UI Official Documentation](https://headlessui.dev/) in order to start using it**
