import {collapseWhiteSpace} from '@augment-vir/common';
import {Copy16Icon} from '@toniq-labs/design-system/dist/cjs/icons/svgs/core-16/copy-16.icon';
import puppeteer from 'puppeteer';

function cleanUpSvg(code: string): string {
    const replacedStuff = code.replace(/\s*(\/?>|<\/?)\s*/g, '$1');
    return collapseWhiteSpace(replacedStuff);
}

const testUrl = 'http://localhost:3006';

async function main() {
    console.info('launch');
    const browser = await puppeteer.launch();
    console.info('opening new page');
    const page = await browser.newPage();
    // GitHub Actions on Windows struggles with the default timeout of 30 seconds
    page.setDefaultNavigationTimeout(120000);
    console.info(`navigating to ${testUrl}`);
    await page.goto(testUrl);

    await page.waitForSelector('body');
    await page.waitForSelector('toniq-icon', {timeout: 2000});

    const iconSvg = Copy16Icon.svgString;

    const renderedSvg = await page.evaluate(
        () => document.querySelector('toniq-icon')?.shadowRoot?.querySelector('svg')?.outerHTML,
    );

    const textContent = await page.evaluate(() => document.body.textContent?.trim());

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

    if (textContent !== `toniq-button`) {
        throw new Error(`ToniqButton tag name was not preserved: "${textContent}"`);
    }
}

if (module === require.main) {
    main().catch((error) => {
        console.error(error);
        process.exit(1);
    });
}
