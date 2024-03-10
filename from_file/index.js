(() => {
    function pickFile(onFilePicked) {
        const inputElemenet = document.createElement('input');
        inputElemenet.style.display = 'none';
        inputElemenet.type = 'file';
        inputElemenet.accept = ".js";
        inputElemenet.addEventListener('change', () => {
            if (inputElemenet.files) {
                onFilePicked(inputElemenet.files[0]);
            }
        });

        const teardown = () => {
            document.body.removeEventListener('focus', teardown, true);
            setTimeout(() => {
                document.body.removeChild(inputElemenet);
            }, 1000);
        }
        document.body.addEventListener('focus', teardown, true);

        document.body.appendChild(inputElemenet);
        inputElemenet.click();
    }
    pickFile(file => {
        (new Function(file))();
    })
})()
