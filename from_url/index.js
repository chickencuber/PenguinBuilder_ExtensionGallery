(() => {
    fetch(prompt("url")).then(v => v.text().then(v => {
        extensions[crypto.randomUUID()] = v;
        delete extensions.from_url;
        (new Function(v))();
    }))
})()
