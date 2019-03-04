/* eslint-disable import/no-extraneous-dependencies */
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-local-resolve';
import rollupExternalModules from 'rollup-external-modules';
import path from 'path';

import { readFileSync } from 'fs';
import { createFilter } from 'rollup-pluginutils';

const mimeTypes = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  // '.svg':  'image/svg+xml',
};

function imageBase64(options = {}) {
  const filter = createFilter(options.include, options.exclude);

  return {
    name: 'image',

    load: function load(id) {
      if (!filter(id)) return null;

      const mime = mimeTypes[path.extname(id)];
      if (!mime) return null; // not an image

      const data = readFileSync(id, 'base64');
      const code = `var img = 'data:${mime};base64,${data}'; export default img;`;

      return code;
    },
  };
}

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
  },
  plugins: [
    imageBase64(),
    babel({
      configFile: path.resolve(__dirname, './.babelrc'),
      exclude: 'node_modules/**', // only transpile our source code
    }),
    resolve(),
  ],
  external: rollupExternalModules,
};
