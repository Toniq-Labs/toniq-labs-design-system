#!/usr/bin/env bash

fixCli() {
    npx kill-port 3006
    exit 1
}

trap fixCli SIGINT SIGTERM TERM ERR

set -e

# tsconfig-paths is needed here to make ts-node read the tsconfig baseUrl correctly

npx kill-port 3006
npm start &

npx ts-node puppeteer-src/index.ts
npx kill-port 3006