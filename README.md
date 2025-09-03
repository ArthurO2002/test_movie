# Movie Explorer

A modern web application for browsing and exploring movies using The Movie Database (TMDB) API. Built with Svelte and TailwindCSS.

## Features

- **Movie Browsing**: Browse popular and top-rated movies
- **Movie Details**: View comprehensive details about each movie including:
  - Title, poster, and backdrop images
  - Runtime and release date
  - Genres and ratings
  - Plot overview
  - Cast information
- **Filtering System**: Filter movies by:
  - Genre
  - Release year
  - Title search
- **Responsive UI**: Optimized for various screen sizes
- **Interactive Elements**:
  - Expandable text for movie descriptions
  - Carousel displays for movies and cast members
  - Star ratings
  - Navigation between movie lists and details

## Technologies Used

- **Frontend Framework**: Svelte 5
- **Styling**: TailwindCSS 4
- **UI Components**:
  - Embla Carousel for smooth scrolling carousels
  - Custom UI components (buttons, chips, ratings)
- **API Integration**: The Movie Database (TMDB) API
- **Build Tools**: Vite
- **Type Safety**: TypeScript

## Installation

1. Clone the repository:
   ```sh
   git clone git@github.com:ArthurO2002/test_movie.git
   cd test-movie
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn
   # or
   pnpm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   # or
   npm run dev -- --open
   ```

## Usage

- The home page displays popular and recommended movies
- Use the filter section to narrow down movies by genre, year, or title
- Click on any movie to view its detailed information
- Navigate back using the back button on the movie detail page

## Building for Production

To create a production version of the app:

```sh
npm run build
```

You can preview the production build with:

```sh
npm run preview
```

## Project Structure

- `/src/routes`: Page components and routing
- `/src/lib/components`: Reusable UI components
- `/src/types`: TypeScript interfaces for data structures
- `/src/constants`: API endpoints and constants

## Acknowledgements

- Movie data provided by [The Movie Database (TMDB)](https://www.themoviedb.org/)
- Icons and images from Figma

## Live Demo

The app is deployed on Vercel:  
👉 [Movie App on Vercel](https://test-movie-five.vercel.app/)