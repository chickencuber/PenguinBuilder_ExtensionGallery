(() => {
    $.create("input").props({ type: "file", accept: ".js" }).on("change", (event) => {
        const files = event.target.files;
        if (files.length === 0) return;

        const file = files[0];
        const reader = new FileReader();

        reader.onload = function (event) {
            const fileContent = event.target.result;
            extensions[crypto.randomUUID()] = fileContent;
            (new Function(fileContent))();
        };
        reader.readAsText(file);
    }).click();
})()
