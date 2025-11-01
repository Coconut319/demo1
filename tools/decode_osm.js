const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
const code = process.argv[2];
if (!code) {
  console.error('Usage: node decode_osm.js <shortlink>');
  process.exit(1);
}
let x = 0;
let y = 0;
let zoom = 0;
for (const ch of code) {
  const value = chars.indexOf(ch);
  if (value === -1) {
    console.error(`Invalid character: ${ch}`);
    process.exit(1);
  }
  for (let i = 0; i < 3; i += 1) {
    const shift = (2 - i) * 2;
    const bits = (value >> shift) & 0x3;
    x = (x << 1) | (bits & 1);
    y = (y << 1) | ((bits >> 1) & 1);
    zoom += 1;
  }
}
const n = 1 << zoom;
const lon = (x * 360) / n - 180;
const lat = Math.atan(Math.sinh(Math.PI * (1 - (2 * y) / n))) * 180 / Math.PI;
console.log(JSON.stringify({ lat, lon, zoom }));
