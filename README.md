````md
# Vue 3 Pokedex with TypeScript

This project is a starter template for developing with Vue 3 in Vite, utilizing TypeScript, Axios, HeroIcons, and Tailwind CSS.

## Recommended IDE Setup

Use [VSCode](https://code.visualstudio.com/) with [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur for better compatibility).

## Type Support for `.vue` Imports in TypeScript

To enable proper type checking for `.vue` files, replace the default `tsc` CLI with `vue-tsc`. Additionally, [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) is required in the editor for the TypeScript language service to recognize `.vue` types.

## Configuration

Refer to the [Vite Configuration Reference](https://vitejs.dev/config/) for customization options.

## Project Setup

1. Create a `.env` file in the root directory, specifying `VITE_POKEMON_API_URL` and `VITE_POKEMON_IMG_API_URL` to configure the API endpoints. You can refer to `.env.example` as a guide.

2. Install dependencies:

   ```sh
   npm install
   ```
````

### Development

To run the application in development mode with hot-reloading:

```sh
npm run dev
```

### Production

For type-checking, compiling, and minifying the project for production:

```sh
npm run build
```

### Unit Testing

To run unit tests with [Vitest](https://vitest.dev/):

```sh
npm run test:unit
```

### Linting

To lint and format the code using [ESLint](https://eslint.org/):

```sh
npm run lint
```

## Deployed Application

You can access the live project here: [Pokedex Vue 3 App](https://vue3-pokedex-ts-tailwind.netlify.app/)

## Technical Test Link

Details of the technical requirements can be found here: [Frontend Developer Technical Test](https://copybaseai.notion.site/Teste-T-cnico-Desenvolvedor-a-Front-end-09-2024-10d98e1221408079b5a7ccc5b4d23e65)

## Implemented Features (Based on Technical Test)

### **Required Functionalities**

1. **Pokémon Listing**:

   - Display a **paginated list** of Pokémon, showing their images, names, and numbers.
   - Each item includes the Pokémon's **image**, **name**, and **number**.
   - Implement **infinite scrolling** for easy navigation.

2. **Pokémon Details**:

   - On selection, display detailed information such as:
     - **Stats**: HP, Attack, Defense, Special Attack, Special Defense, and Speed.
     - **Types**: Show types with corresponding colors.
     - **Evolutions**: Display the evolution chain with images and names.

3. **Search and Filter**:

   - **Search by Name or Number**:
     - A search bar allows users to look for Pokémon by **name** or **number**.
     - Display real-time search results or on form submission.
   - **Filter by Type**:
     - Enable users to filter the Pokémon list by **type** (Water, Fire, Grass, etc.).
     - Dynamically update the list based on the applied filters.

4. **Responsiveness and Performance**:
   - The application is fully **responsive**, ensuring smooth performance across mobile and desktop devices.

### **Optional Features**

5. **Extras**:
   - **Favorites**:
     - Allow users to mark Pokémon as favorites and persist the list locally.
     - Implement a dedicated section to display the favorite Pokémon.
   - **Animations and Transitions**:
     - Enhance the user experience with smooth animations and transitions.

```

This version is more structured and concise, making it easier for users and developers to follow and understand.
```
