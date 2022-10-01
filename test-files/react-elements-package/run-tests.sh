#!/usr/bin/env bash

fixCli() {
    npx kill-port 3006
    exit 1
}

trap fixCli SIGINT SIGTERM TERM ERR;

set -e;

npx kill-port 3006;
BROWSER=none FORCE_COLOR=true PORT=3006 npm start &

npx ts-node puppeteer-src/run-prettier-tests.ts;
npx kill-port 3006;