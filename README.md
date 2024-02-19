## Table Of Contents
- [Intro](#intro)
- [e2e Tests](#tests)
- [Deploy](#deploy)
- [Key Concepts](#key-concepts)

### Intro

- To `reduce` the React `render memory usage` this app uses `windowing technique`. As soon as it's React app I decided to add `react-window` to render `only visible part` of the `large lists` that comes from computed out of storage.
- It stores lists as separated `key-value structures` that offers to have quick access to the values by `unique keys`
- It uses `as less nesting as possible`
- To get the additional info, it made `relations` between stores that can be done by `related IDs`
- To get the `related` or `filtered` data it use `IDs` and `computed properties` that uses `memoization` as well

### Tests

E2E tests can be foun at `cypress/integration/filtering.spec.js` [link](https://github.com/shapkarin/metrics-crypto/blob/main/cypress/integration/filtering.spec.js)

it also works with deploy, check `.github/workflows/deploy.yml` [link](https://github.com/shapkarin/metrics-crypto/blob/main/.github/workflows/deploy.yml)

<img width="650" alt="Screenshot 2024-02-17 at 07 10 45" src="https://github.com/shapkarin/metrics-crypto/assets/1463086/e93103e0-0923-49f2-ac06-6205c908922d">


### Deploy

Repo uses GitHub Actions to deploy to the GitHub Pages.
check `.github/workflows/deploy.yml`

### Key Concepts



