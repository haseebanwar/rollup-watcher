const { watch } = require('rollup');
const { nodeResolve } = require('@rollup/plugin-node-resolve');

async function watchMode() {
  try {
    const watcher = watch([
      {
        input: 'src/index.js',
        plugins: [nodeResolve()],
        output: {
          dir: 'dist',
          format: 'esm',
        },
      },
      {
        input: 'playground/index.js',
        plugins: [nodeResolve()],
        output: {
          dir: 'playground/build',
          format: 'esm',
        },
      },
    ]);

    watcher.on('event', (evt) => {
      if (evt.result) {
        evt.result.close();
      }

      if (evt.code === 'START') {
        console.log('Compiling...');
      }

      if (evt.code === 'ERROR') {
        console.log('Failed to compile');
        console.error(evt.error);
      }

      if (evt.code === 'END') {
        console.log('Compiled');
      }
    });
  } catch (error) {
    console.log('error', error);
  }
}

watchMode();
