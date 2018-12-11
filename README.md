# Rendering Essential JS 2 Components with Booststrap3 SCSS variables

This example explains how to render the Essential JS 2 Components with Bootstrap3 SCSS variables.

## Sample structure

**src/index.html**: The main file which contains the HTML elements of EJ2 components and it will be serve in the web browser.

**src/index.js**: The JavaScript file which initiates the EJ2 components.

**src/datasource.js**: The JSON data is maintained for data components. Example: DataGrid

**styles/_bootstrap-variables.scss**: Bootstrap3 SCSS variables are placed inside this file.

**styles/_ej2.scss**: EJ2 component Bootstrap theme styles are added in this file.

**styles/index.scss**: Reference of both Bootstrap3 and EJ2 Boostrap styles are added in this file.

## Running the application

* Open the command prompt from the application folder and install the required npm dependecies by using the below command line.

```sh
npm install
```

* Run the below command line to serve the application in the web browser. When running this command line, the SCSS files will be compiled into CSS file and stored in `~/src/index.css`.

```sh
npm run serve
```

> Change the values in `~/styles/_bootstrap-variables.scss` and it will be reflecting in the Essential JS 2 components.
