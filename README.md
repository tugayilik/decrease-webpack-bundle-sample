# decrease-webpack-bundle-sample
Decrease webpack bundle size with conditional dynamic imports

A small example related with this blog post;

https://levelup.gitconnected.com/decreasing-webpack-bundle-size-with-conditional-imports-f8bb94db8195


## Usage
Run `npm run build` and check bundled modules. 

Module1 will be imported empty as it's specified false in webpack.config.js plugins section.

Module2 will be imported as it's since it's specified true webpack.config.js plugins section.
