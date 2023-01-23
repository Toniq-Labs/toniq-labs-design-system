#!/usr/bin/env bash

fixCli() {
    npx kill-port 3006
    exit 1
}

trap fixCli SIGINT SIGTERM TERM ERR;

npx kill-port 3006;

set -e;

BROWSER=none FORCE_COLOR=true PORT=3006 npm start &
sleep 2;
npx ts-node puppeteer-src/run-puppeteer-tests.ts;
npx kill-port 3006;