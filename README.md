# Toniq Labs Design System

Reusable elements for Toniq Lab's websites. All elements are implemented as [native custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) using [`element-vir`](https://www.npmjs.com/package/element-vir).

React wrappers for all elements also included and are importable through `@toniq-labs/design-system/dist/esm/elements/react-components`. (If you need CommonJS imports, replace `esm` with `cjs` in that import line.) See [`./test-files/react-elements-repo`](https://github.com/Toniq-Labs/toniq-labs-design-system/blob/main/test-files/react-elements-repo/src/App.js) for a usage example of these React wrappers.

-   Package on NPM: https://www.npmjs.com/package/@toniq-labs/design-system
-   Storybook on GitHub Pages: https://toniq-labs.github.io/toniq-labs-design-system

## Usage

```bash
npm i @toniq-labs/design-system
```

### importing into React

Import React-wrapped versions of each component from `dist/esm/elements/react-components`:

```TSX
import {ToniqIcon} from '@toniq-labs/design-system/dist/esm/elements/react-components';
import {Copy16Icon} from '@toniq-labs/design-system'


function myComponentFunction() {
    return (
        <>
            <ToniqIcon icon={Copy16Icon} />
        </>
    );
}
```

## Dev

Make sure that:

-   you're on Node.js version `v16.15.0`. So far, later versions of `v16.15` have massive issues running `npm install` for this repo.
-   you run `npm install` first.

-   Run tests:
    ```bash
    # run all native element tests
    npm test
    # run all complex script tests
    npm run test:scripts
    # run ALL tests, including formatting and spellchecking
    npm run test:full
    ```
-   Run Storybook:
    ```
    npm run storybook
    ```
-   Build for publishing:
    ```
    npm run build
    ```
-   Adding new dependencies:
    The peer dependencies between our deps are messed up (thanks, React), so if you see a bunch of `ERESOLVE overriding peer dependency` errors, try using the `--force` flag: `npm i --force <package-name>`
