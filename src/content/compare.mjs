import { readdirSync } from 'fs';
import { join } from 'path';

const files = readdirSync(join(import.meta.dirname, 'docs'), { recursive: true });

const es = new Set();
const en = new Set();

for (const file of files) {
	if (!file.endsWith('.md') && !file.endsWith('.mdx')) continue;
	if (file.startsWith('es')) es.add(file);
	else en.add(file);
}

console.log([...en].filter(f => !es.has('es\\' + f)));
