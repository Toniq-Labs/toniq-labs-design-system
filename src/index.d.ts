import 'react';

declare module 'react' {
    interface CSSProperties {
        /**
         * This allows us to set CSS vars, which always start with --, as properties in style
         * objects, without type errors, like in the following:
         *
         * Style={{--my-var-name: 'blue'}}
         */
        [key: `--${string}`]: string | number;
    }
}
