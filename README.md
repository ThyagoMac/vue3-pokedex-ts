# vue3-pokedex-ts

This template should help get you started developing with Vue 3 in Vite using TypeScript, Axios, HeroIcons and Tailwind.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

Create .env file in source folder and creating VITE_POKEMON_API_URL and VITE_POKEMON_IMG_API_URL attributes to set API urls. You can use .env.example file as example.

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Deployed Project

https://vue3-pokedex-ts-tailwind.netlify.app/

## Tecnic Test Link

https://copybaseai.notion.site/Teste-T-cnico-Desenvolvedor-a-Front-end-09-2024-10d98e1221408079b5a7ccc5b4d23e65

## Implemented Features (based on test)

## **Funcionalidades Requeridas**

1. **Listagem de Pokémon**:
   - Exibir uma **lista paginada** de Pokémon com imagens, nomes e números.
   - Cada item deve mostrar a **imagem**, **nome** e **número** do Pokémon.
   - Implementar paginação para navegar entre os Pokémon (**scroll infinito**).
2. **Detalhes do Pokémon**:
   - Ao selecionar um Pokémon, mostrar informações detalhadas, incluindo:
     - **Estatísticas**: HP, Attack, Defense, Special Attack, Special Defense e Speed.
     - **Tipos**: Exibir os tipos com cores correspondentes.
     - **Evoluções**: Mostrar a cadeia de evolução com imagens e nomes.
3. **Busca e Filtro**:
   - **Busca por Nome ou Número**:
     - Implementar uma barra de busca que permite ao usuário pesquisar pelo **nome** ou **número** do Pokémon.
     - Exibir resultados em tempo real ou ao submeter a pesquisa.
   - **Filtro por Tipo**:
     - Permitir que o usuário selecione um ou mais **tipos** para filtrar a lista de Pokémon (água, fogo, grama, etc.).
     - Atualizar a listagem conforme os filtros aplicados.
4. **Responsividade e Desempenho**:

   - A aplicação deve ser **responsiva** e funcionar bem em dispositivos móveis e desktops.

   ## **Funcionalidades Extras (Opcional)**

5 **EXTRAS**

- **Favoritos**:
  - Permitir que o usuário marque Pokémon como favoritos e mantenha essa lista armazenada localmente.
  - Implementar uma seção para listar os Pokémon favoritos.
- **Animações e Transições**: Adicionar animações suaves para melhorar a experiência visual.
