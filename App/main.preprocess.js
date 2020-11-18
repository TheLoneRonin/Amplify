require('colors');
const { list, read, write } = require('fs-jetpack');

(async () => {
    const items = list('out');
    const replacer = new RegExp('/images/', 'g');

    for (let i = 0; i < items.length; i++) {
        const item = items[i];

        if (item.indexOf('.html') !== -1) {
            const file = read(`out/${item}`);
            write(`out/${item}`, file.replace(replacer, './images/'));
            console.log(`Processed ${item}`.green);
        }
    }
})();