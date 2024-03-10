// (async () => {
//     const content = await (await fetch(prompt("url of extension"))).text();
//     const id = window.crypto.randomUUID();
//     extensions[id] = content;
//     delete extensions.from_url;
//     (new Function(content))();
// })()
