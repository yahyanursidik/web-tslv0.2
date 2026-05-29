const fs = require('fs');
const extractMain = (file) => {
    const html = fs.readFileSync(file, 'utf8');
    const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/);
    if (!mainMatch) return "";
    let main = mainMatch[1];
    return main;
};

const beranda = extractMain('beranda-asli.html');
const kelas = extractMain('kelas-bahasa-arab.html');

const berandaAstro = `---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Beranda TSL">
<main>
${beranda}
</main>
</Layout>
`;

const kelasAstro = `---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Kelas Bahasa Arab Online">
<main>
${kelas}
</main>
</Layout>
`;

fs.writeFileSync('src/pages/index.astro', berandaAstro);
fs.writeFileSync('src/pages/kelas-bahasa-arab.astro', kelasAstro);
console.log("Pages regenerated with Layouts successfully!");
