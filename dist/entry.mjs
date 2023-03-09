import { g as server_default } from './chunks/astro.5fad8548.mjs';
import { _ as _page0, a as _page1 } from './chunks/pages/all.aaef7e5c.mjs';
import 'html-escaper';
/* empty css                                  */import 'kleur/colors';
import 'node:fs/promises';
import 'node:path';
import 'node:url';
import 'http-cache-semantics';
import 'node:os';
import 'image-size';
import 'magic-string';
import 'node:stream';
import 'slash';
import 'mime';
/* empty css                                 */import 'svgo';

const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/[slug].astro", _page1],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),];

export { pageMap, renderers };
