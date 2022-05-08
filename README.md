# Toniq Labs Design System

Reusable components for Toniq Lab's websites. All components are currently React only.

-   Package on NPM: https://www.npmjs.com/package/@toniq-labs/design-system
-   Storybook on GitHub Pages: https://toniq-labs.github.io/toniq-labs-design-system

# Usage

```bash
npm i @toniq-labs/design-system
```

# Dev

Make sure to run `npm install` first.

-   Run tests:
    ```
    npm test
    ```
-   View Storybook:
    ```
    npm run storybook
    ```
-   Build for publishing:
    ```
    npm run build
    ```
-   Adding new dependencies:
    The peer dependencies between our deps are all messed up, so if you see a bunch of `ERESOLVE overriding peer dependency` errors, try using the `--legacy-peer-deps` flag: `npm i --legacy-peer-deps <package-name>`
