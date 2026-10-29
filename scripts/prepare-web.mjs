// Copies the web game into dist/ so Tauri bundles only the game, not the whole repo.
import { cpSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });
for (const file of ['index.html', 'm6x11-webfont.woff']) {
  cpSync(join(root, file), join(dist, file));
}
console.log('web files copied to dist/');
