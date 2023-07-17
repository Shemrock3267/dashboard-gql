# Crypto tracker app

## Table of Contents

- [Design](#design)
- [Tools](#tools)
- [Project](#project)
- [How to Use](#how-to-use)

---

## Design

As a starting point, I decided to grab only specific parts of the mockup and use different styling. Due to the fact that MUI components posses generic styles, I had to apply custom theme with different pallets, globas styles, etc.

---

## Tools

To start the development process, I decided to use [Vite](https://vitejs.dev/), a lightweight build tool that offers TypeScript integration and can be easily configured through a single file.

For the UI library, I chose [Material UI](https://mui.com/). I've used it before a couple times.

To retrieve data, I utilized the [SWAPI GraphQL](https://studio.apollographql.com/public/star-wars-swapi/variant/current/home) open API.

To handle GraphQL queries I decided to use [AppoloClient](https://www.apollographql.com/docs/) package that provides really handy and easy to use, on the plus side it gives an ability to cache already made queries.

To be able to add different charts I used [recharts](https://recharts.org/en-US/api) package. Though it's not perfect as I discovered later on, and I had to scratch my head a bit before fixing some basic issues I still liked it, and it's definitely has it's niche.

As for icons I found a great one that fits this project theme perfectly [MDIcons](https://github.com/Templarian/MaterialDesign-React#readme) and a couple more as well as Icon component that should render them.

I had an idea to apply routing and create a few more pages, but that was not required and thus I was limited in time I decided not to use the reliable [react-router-dom](https://reactrouter.com/en/main) package.

---

## Project

The deployed static site is hosted on [Netlify](https://www.netlify.com/). You can access it [here](https://swgql-dashboard.netlify.app/).

To run the project locally, follow these steps:

### Prerequisites

- Node ^18.16
- npm ^8.13.2

### Installation and Setup

1. Clone the repository to your local machine:

   - Via SSH:

     ```
     git clone git@github.com:Shemrock3267/dashboard-gql.git
     ```

   - Via HTTPS:
     ```
     git clone https://github.com/Shemrock3267/dashboard-gql.git
     ```

2. Install the project dependencies:

```
npm install
```

3. Run the development server:

```
npm run dev
```

4. Build the project:

```
npm run build
```

5. Run the production build:

```
npm run preview
```

---

## How to Use

**Note:** The project has been tested only in Google Chrome due to time constraints during development.
