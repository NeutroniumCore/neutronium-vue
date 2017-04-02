# neutronium vue template
<p align="center"><img width="100"src="https://raw.githubusercontent.com/NeutroniumCore/neutronium-vue/master/template/src/assets/logo.png"></p>


> A simple Vue 2.0 Neutronium vue-cli template using Webpack. 

### Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli) for starting [Neutronium](https://github.com/NeutroniumCore/Neutronium) project

``` bash
$ npm install -g vue-cli
$ vue init NeutroniumCore/neutronium-vue#v3.1.0 my-view
$ cd my-view
$ npm install
$ npm run dev
```

### What's Included

- `npm run dev`: Webpack + `vue-loader` with proper config for source maps & hot-reload for developing using web browser. Use data.json file to provide viewmodel data to your application.

- `npm run build`: build for neutronium usage with HTML/CSS/JS minification. Just reference the generated `dist\build.js` and `dist\index.html` in the neutronium project

- Support of cjson files in `\data` folder to be used as dev ViewModel


### Important

Each versions is specific to a version of Neutronium.JavascriptFramework.Vue.

For `0.5.0` use:
``` bash
$ vue init NeutroniumCore/neutronium-vue#v3.1.0 my-project
```

For `0.4.0` use:
``` bash
$ vue init NeutroniumCore/neutronium-vue#v2.4.0 my-project
```

### See Neutronium wiki for more explanation
[Build large project with Vue.js and Webpack
](https://github.com/NeutroniumCore/Neutronium/wiki/Build-large-project-with-Vue.js-and-Webpack)

### Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and use it with `vue-cli`:

``` bash
vue init username/repo my-project
```
