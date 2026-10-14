// Copia las librerías JS a www/libs para que la app funcione SIN Internet.
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");
const dest = path.join(root, "www", "libs");
fs.mkdirSync(dest, { recursive: true });
fs.copyFileSync(path.join(root, "node_modules/@e965/xlsx/dist/xlsx.full.min.js"), path.join(dest, "xlsx.full.min.js"));
fs.copyFileSync(path.join(root, "node_modules/html5-qrcode/html5-qrcode.min.js"), path.join(dest, "html5-qrcode.min.js"));
console.log("Librerías copiadas a www/libs");
