[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![Lifecycle:Experimental](https://img.shields.io/badge/Lifecycle-Experimental-339999)](https://github.com/bcgov/repomountie/blob/master/doc/lifecycle-badges.md)

# 🚀 Government of British Columbia Bootstrap v5 Theme

[Demonstrations of the theme](https://bcgov.github.io/bootstrap-v5-theme/)

A Bootstrap version 5.3 BC Government look-and-feel featuring:

- The [BC Sans](https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/bc-visual-identity/bc-sans) typeface
- Compatibility with pure Bootstrap markup

The project is a successor to the previous
[Gov-4.0-Bootstrap-theme](https://github.com/bcgov/bootstrap-theme)
[Gov-2.0-Bootstrap-Skeleton](https://github.com/bcgov/Gov-2.0-Bootstrap-Skeleton)
and [mygovbc-bootstrap-theme](https://github.com/bcgov/mygovbc-bootstrap-theme).
We combined the best of all projects and leverage the latest
[Bootstrap](http://getbootstrap.com/) version.

## Usage

- ### Direct Integration with Minified Files

    You can directly use the minified CSS and JS files in your project after building with `npm run build`. The files will be available in the `dist` directory.

    For production use, add these to your HTML:

    ```html
    <head>
        <!-- CSS file -->
        <link href="css/bootstrap-theme.min.css" rel="stylesheet">
        
        <!-- JS file with type="module" for ES modules support -->
        <script type="module" src="js/bootstrap-theme.min.js"></script>
    </head>
    ```

    For development with source files, use this approach instead:

    ```html
    <head>
        <!-- Import the JS which will automatically process the SCSS -->
        <script type="module">
            import './src/js/bootstrap-theme.js';
        </script>
    </head>
    ```
    
    Note: The development approach directly imports the source JavaScript file, which in turn imports the SCSS. This provides the best experience when working with Vite's dev server.

- ### SCSS To Modify Variables/Themes

    This section describes how to change the theme or remove unneeded CSS

    - #### Tool Setup

        You'll need the following tools installed on your device:
        
        * [NodeJS 20 LTS+](https://nodejs.org/en/) with NPM 10+ to build

    - #### First Install

        After your tools are in place, you should install some packages. In the working directory:

        ```bash
        git clone https://github.com/richfrem/bootstrap-v5-theme.git
        cd bootstrap-v5-theme
        npm install
        ```

    - #### Building Dist

        To build the styles, JavaScript and other assets for production, use:

        ```bash
        npm run build:vite
        ```    

        This command uses Vite to build optimized CSS, JS, and assets for production.

        For development with hot module replacement and real-time updates:

        ```bash
        npm run dev
        ```

        Note: While the original `npm run build` command still exists for backward compatibility, 
        we recommend using `npm run build:vite` for better performance and modern output formats.

- ### Migration Guide From Version 4 to 5

    The [CHANGELOG](CHANGELOG.md) outlines the majority of classes and changes needed for migration, allowing you to easily refer to and perform search and replace where necessary.

    If you need to add or modify utilities, you can consult the official [bootstrap migration guide](https://getbootstrap.com/docs/5.3/migration/) for a comprehensive list of changes.

## Migration Guide From Bootstrap 5.0 to 5.3.3

This theme has been updated to work with Bootstrap 5.3.3, which includes several key changes from earlier Bootstrap 5 versions. Here's what you need to know:

### Key Changes in Bootstrap 5.3.3

1. **SASS Import Changes**: 
   - We've converted from mixed `@use` and `@import` directives to consistent `@import` syntax
   - Functions like `map.get()` are now used as `map-get()` for better compatibility
   - If you're extending this theme, maintain this consistent approach

2. **Color Mode Support**:
   - Bootstrap 5.3+ adds built-in color modes (light/dark)
   - Our theme now supports these modes with proper BC Gov styling
   - Use the `.text-bg-*` utilities for proper color combinations with background colors

3. **New CSS Variables**:
   - Bootstrap 5.3 adds extensive CSS variables for colors, spacing, etc.
   - Our theme overrides these appropriately for BC Gov styling
   - You can use these variables directly in your custom CSS

4. **Enhanced Grid System**:
   - Added the new `.container-fluid` responsive variants
   - Improved support for vertical spacing with gaps

5. **Build System Update**:
   - Switched from Webpack to Vite for better performance
   - Use `npm run build:vite` instead of `npm run build` for production builds
   - Use `npm run dev` for development with hot reloading

### Migration Steps

1. Update your HTML imports:
   ```html
   <!-- Old approach -->
   <script src="js/bootstrap-theme.js" defer="defer"></script>
   
   <!-- New approach -->
   <script type="module" src="js/bootstrap-theme.min.js"></script>

## Extending the Theme

Refer to the [official Bootstrap documentation](https://getbootstrap.com/docs/5.3/extend/approach/) to learn about extending or enhancing this theme. 

Tooling and build follow the same steps as [SCSS To Modify Variables/Themes section](#scss-to-modify-variablesthemes)

# NPM Package

https://www.npmjs.com/package/@bcgov/bootstrap-v5-theme


## NPM Package Maintenance

If you would like to update the project and would like to push your changes to the npm registry, the following will be useful.
To push to the npm registry, you must ensure that the version number has been updated to reflect any of the changes that you’ve made. Upon following semantic versioning, and updating the version number in `package.json`  you can then publish the package in your own namespace.

1. Ensure you are logged into your npm account. To log in via the terminal, run the following:

```bash
npm login
```

- upon successful completion you will see the following: 

```bash
Logged in on https://registry.npmjs.org/.
```

2. Now you can publish your package

    - Run the following command in your termnial
    
```bash
npm publish --access=public
```

If you are publishing to a namespace, you will have to ensure that `--acess=public` is included in your run command as packages for an org are private by default


Note: You can test your changes locally by changing the name in the package.json to `@<your-namespace>/bootstrap-v5-theme` and publishing there. Once you are satisfied, you can republish to the @bcgov org.
    

## Updating the Theme

If Bootstrap has a minor update and you wish to update the minified CSS and JS files, do the following:
1. Run `npm run build` in order to build the needed assests.
2. Mark a new release on GitHub 
3. Publish the updated dist folder to NPM JS Registry as a new NPM package version

## Fork Information

This fork has been updated to work with Bootstrap 5.3.3 and includes improved support for:

- Consistent Sass import syntax using `@import` for better compatibility with Bootstrap 5.3.x
- Modern build system using Vite instead of Webpack
- Simplified asset management
- Updated dependencies for better development experience

### Vite Build System

This theme now uses Vite for both development and production builds, offering:
- Faster build times
- Improved development experience with hot module replacement
- Better asset optimization

#### Development Workflow

1. Install dependencies:
   ```bash
   npm install
