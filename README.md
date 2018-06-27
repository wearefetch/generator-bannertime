# ![Logo](generators/app/templates/src/base/images/logo.png)

[![Build Status](https://travis-ci.org/bannertime/generator-bannertime.svg?branch=master)](https://travis-ci.org/bannertime/generator-bannertime)
[![npm version](http://img.shields.io/npm/v/generator-bannertime.svg?style=flat)](https://npmjs.org/package/generator-bannertime "View this project on npm")
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](https://bannertime.github.io/license)
[![Gitter Chat](http://img.shields.io/badge/chat-online-brightgreen.svg)](https://bannertime.herokuapp.com)

##### [Docs](https://bannertime.github.io/) - [Guidelines](https://bannertime.github.io/guides/contributing) - [License](https://bannertime.github.io/license)

Fetch Yeoman generator for creating HTML5 advertising campaigns

The goal of this project is to streamline banner builds and standardise workflow.

The generator sets up the project scaffolding for you so that you can focus on the fun stuff.

based on pyramidium Bannertime generator ( all praises due )


# Quick Start

### Install Yeoman, Gulp and Bannertime

```bash
$ npm i -g yo gulp generator-fetch-mi-banners
```


### Make a new directory and cd into it

```bash
$ mkdir my-campaign && cd $_
```


### Run Bannertime

```bash
$ yo fetch-mi-banners
```


## Usage

## Usage

Use `gulp` to automatically launch the banner into the browser with browsersync all your changes will be reflected in the browser with each file save.

Use `gulp prod` to generate a ZIP file of all the assets of the banner, these will all have been minified as well.

Use `gulp backup-gen` to automatically generate backup images for each banner.

### Creating Elements

You can create DOM elements using the the `smartObject` function, this will initialise a `<div>` with the default style of: `position: absolute; top: 0; left: 0;`.

You are able to set a background image, or set a nested image as a `<img>` element.

There are helper functions such as `center`, `centerHorizontal` and `centerVertical` to help you position the element.

Other settings are set using a helper function on the element which uses GSAP to process. So `this.logo.set({autoAlpha: 0, scale: 0.4});` is the same as `TweenLite.set(this.logo, {autoAlpha: 0, scale: 0.4});`

### Animating

The banner animation is run by the `animate` function.

By default we are using TweenLite with TimelineLite, but you can change which flavour of GSAP as you require.

More information in the [documentation](https://bannertime.github.io/).


## Platforms

![Logo](assets/gulp.png)
![Logo](assets/browsersync.png)
![Logo](assets/sass.png)
![Logo](assets/doubleclick.png)
![Logo](assets/adform.png)
![Logo](assets/sizmek.png)
![Logo](assets/atlas.png)
![Logo](assets/flashtalking.jpg)
![Logo](assets/adwords.png)
![Logo](assets/yeoman.png)


