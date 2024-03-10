const url = prompt("url of extension");

(async () => {
    const content = await (await fetch(url)).text();
    const id = window.crypto.randomUUID();
    extensions[id] = content;
    delete extensions.from_url;
    (new Function(content))();
})()
