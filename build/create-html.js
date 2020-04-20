const template = ({ css, js }) => `
<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">

    ${css}
    ${js}
    <script>window.process = { env: 'development' }</script>
</head>
<body></body>
</html>
`;

module.exports = () => ({
    name: "create-html",

    generateBundle(output, bundle) {
        let js;
        const styles = new Set();

        // Create a dependency graph of all the staticly-imported modules so we can calculate
        // the default <style> tags
        Object.entries(bundle).forEach(([entry, { name, isEntry, type, assets }]) => {
            if (type === "asset") {
                return false;
            }

            if (isEntry) {
                js = entry;
            }

            if (assets) {
                assets.forEach((css) => styles.add(css));
            }
        });

        this.emitFile({
            type: "asset",
            source: template({
                css: [...styles.values()].map((css) => `<link rel="stylesheet" href="./${css}" />`).join("\n"),
                js: `<script type="module" src="./${js}"></script>`,
            }),
            fileName: `index.html`,
        });
    },
});
