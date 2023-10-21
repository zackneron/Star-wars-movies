# Star Wars Movie with SWAPI API

This project was built using [Vue.JS] and [Bootstrap 5] for the grid system. I used [Axios] to request API from [SWAPI].<br>
To be able to run this project, feel free to follow the steps as explained below:

## Getting Started

Clone this repo :
`git clone https://github.com/zackneron/Star-wars-movies`


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development
In the project directory, you can run:
```sh
npm run dev
```
The above script will provide a localhost link to view the project in the browser.

### Compile and Minify for Production

```sh
npm run build
```

## Folder Structure

```
|-- src/
    |-- assets/
      |-- fonts
      |-- icon
      |-- images
    |-- components/
        |-- Loader.vue
        |-- Header.vue
        |-- Footer.vue
        |-- Lists.vue
    |-- router/
    	|-- index.js
    |-- views/
        |-- MovieDetails.vue
        |-- MovieList.vue
        |-- NotFound.vue
    |-- App.vue
    |-- main.js
```

- `/assets` : Folder for static assets like custom styles, fonts, icons and images.
- `/components`: Folder containing reusable Vue components.
- `/router` : Folder to store all files related to vue-router.
- `/views` : Folder contains Vue components that represent entire pages or routes in our application.
- `App.vue` : The root component, the starting point for rendering the Vue code when the application gets mounted to that DOM element in the index.html file.
- `main.js` : The entry point for the Vue application, it is where Vue instance itself gets initialized.

### General comment

The UI/UX approach is one with visually appealing and easy to use. I considered Star Wars movies images to make the UI more engaging, content neatness and loading screens to improve the user experience.

To make UI visually appealing I made use of Bootstrap a CSS framework for UI responsiveness.