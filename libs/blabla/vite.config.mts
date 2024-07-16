/// <reference types='vitest' />
import { defineConfig } from 'vite';

import angular from '@analogjs/vite-plugin-angular';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig(({ mode }) => {
  return {
    root: __dirname,
    cacheDir: '../../node_modules/.vite/libs/blabla',

    plugins: [
      angular({
        tsconfig: 'libs/blabla/tsconfig.spec.json',
      }),
      nxViteTsPaths()
    ],

    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [ nxViteTsPaths() ],
    // },

    test: {
      watch: false,
      globals: true,
      environment: 'happy-dom',
      setupFiles: ['src/test-setup.ts'],
      include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

      reporters: ['default'],
      coverage: {
        enabled: false,
        reportsDirectory: '../../coverage/libs/blabla',
        provider: 'v8',
      },
    },
    define: {
      'import.meta.vitest': mode !== 'production',
    },
  }
});
