(() => {
    const button = $.create("input").props({ type: "file", accept: ".js" }).on("change", (event) => {
        const files = event.target.files;
        if (files.length === 0) return;

        const file = files[0];
        const reader = new FileReader();

        reader.onload = function (event) {
            const fileContent = event.target.result;
            (new Function(fileContent))()
        };
        reader.readAsText(file);
    });
    if(confirm("please click to use")) {
        extensions[crypto.randomUUID()] = v;
        delete extensions.from_file;
        button.click();
    } else {
        delete extensions.from_file;
    }
})()
