function drawRainbowTree(height) {
    const maxWidth = 2 * height - 1;
    let treeHTML = "";

    for (let i = 1; i <= height; i++) {
        const starsCount = 2 * i - 1;
        const spacesCount = (maxWidth - starsCount) / 2;
        let lineHTML = " ".repeat(spacesCount);

        for (let j = 0; j < starsCount; j++) {
            const color = colors[(i + j) % colors.length];
            lineHTML += `<span style="color:${color}">*</span>`;
        }
        treeHTML += `<pre class="tree-line">${lineHTML}</pre>`;
    }

    const trunkWidth = 3;
    const trunkSpaces = Math.floor((maxWidth - trunkWidth) / 2);
    const trunkHeight = Math.floor(height / 3);
    for (let t = 0; t < trunkHeight; t++) {
        treeHTML += `<pre class="tree-line">${" ".repeat(trunkSpaces)}| |</pre>`;
    }

    return treeHTML;
}
