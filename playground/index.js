// this tells rollup to look for "module" key in package.json
// which then points to `dist/index.js` (output of the first bundle)
import { text } from '../';

// this text is coming from 'dist/index.js'
console.log(text);
