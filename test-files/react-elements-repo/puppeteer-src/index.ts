import {Copy16Icon} from '@toniq-labs/design-system/dist/cjs/icons/svgs/core-16/copy-16.icon';
import {collapseWhiteSpace} from 'augment-vir';
import puppeteer from 'puppeteer';

function cleanUpSvg(code: string): string {
    const replacedStuff = code.replace(/\s*(\/?>|<\/?)\s*/g, '$1');
    return collapseWhiteSpace(replacedStuff);
}

const urlToLoad = 'http://localhost:3006';

async function main() {
    console.info('launch');
    const browser = await puppeteer.launch();
    console.info('opening new page');
    const page = await browser.newPage();
    console.info(`navigating to ${urlToLoad}`);
    await page.goto(urlToLoad);

    await page.waitForSelector('body');

    const iconSvg = Copy16Icon.svgString;

    const renderedSvg = await page.evaluate(
        () => document.querySelector('toniq-icon')?.shadowRoot?.querySelector('svg')?.outerHTML,
    );

    await browser.close();

    if (!renderedSvg) {
        throw new Error(`svgHTML was empty`);
    }
    if (!iconSvg) {
        throw new Error(`icon svg is empty`);
    }

    const cleanedRenderedSvg = cleanUpSvg(renderedSvg);
    const cleanedIconSvg = cleanUpSvg(iconSvg);

    if (cleanedRenderedSvg !== cleanedIconSvg) {
        console.error({cleanedRenderedSvg, cleanedIconSvg});
        throw new Error(`cleanedRenderedSvg does not equal cleanedIconSvg`);
    }
}

if (module === require.main) {
    main().catch((error) => {
        console.error(error);
        process.exit(1);
    });
}
