(() => {
    $.create("input").props({ type: "file", accept: ".js" }).click().on("change", (event) => {
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
})()
