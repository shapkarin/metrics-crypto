## Table Of Contents
- [Intro](#intro)
- [e2e Tests](#tests)
- [Deploy](#deploy)
- [Key Concepts](#key-concepts)

### Intro

As I remember, at our call you said that you prefer Mobx state management. I didn't use it for at least 4 years. And it was never used in such an application that has a lot of data. That is very interesting to a closer look at and to use Mobx. It's like a pleasure. The reactivity ideas are pretty the same for any framework. So to have a nice Vue2, Vue3, and Vuex experience helped me much. And knowledge of other less reactive state management and databases helped me much.

### Tests

E2E tests can be foun at `cypress/integration/filtering.spec.js` [link](https://github.com/shapkarin/crypto-metrics/blob/main/cypress/integration/filtering.spec.js)
it also works with deploy, check `.github/workflows/deploy.yml` [link](https://github.com/shapkarin/crypto-metrics/blob/main/.github/workflows/deploy.yml)

### Deploy

Repo uses GitHub Actions to deploy to the GitHub Pages.
check `.github/workflows/deploy.yml`

### Key Concepts

- To `reduce` the React `render memory usage` we can use `windowing technique`. As soon as we use React I decided to add `react-window`  or `react-virtualized` to make React's views use and render `only visible part` of the `large lists` that comes from computed out of storage.
- Store your lists as separated `key-value structures` that offers to have quick access to the values by `unique keys`
- Use `as less nesting as possible`
- To get the additional info, we should made `relations` between stores that can be done by `related IDs present at values`
- To get the `related` or `filtered` data we should use `IDs` and `computed properties` that use `memoization` as well

