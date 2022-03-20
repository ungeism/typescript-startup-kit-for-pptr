const puppeteer = require('puppeteer');

(async () => {
    // browserを立ち上げる
    const browser = await puppeteer.launch();
    // page(tab)を生成する
    const page = await browser.newPage();
    // 特定のURLへ移動する｡
    await page.goto('https://google.com');
    // スクリーンショット作成
    await page.screenshot({ path: 'img/sample.png' });
    // browserを閉じる
    await browser.close();
})();
