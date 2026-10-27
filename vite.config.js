import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The Spline runtime hardcodes CDN URLs for the wasm this scene needs. Point them at the
// copies in public/vendor. Fails the build if a runtime bump changes the URLs.
const SPLINE_CDN_REWRITES = {
  'https://unpkg.com/@splinetool/modelling-wasm@1.9.0/build': '/vendor/spline',
  'https://www.gstatic.com/draco/versioned/decoders/1.5.2/': '/vendor/draco-1.5.2/',
}

const selfHostSplineWasm = {
  name: 'self-host-spline-wasm',
  apply: 'build',
  transform(code, id) {
    if (!id.includes('@splinetool/runtime/build/runtime.js')) return
    for (const [cdn, local] of Object.entries(SPLINE_CDN_REWRITES)) {
      if (!code.includes(cdn)) throw new Error(`Spline runtime no longer references ${cdn}; re-vendor its wasm`)
      code = code.replaceAll(cdn, local)
    }
    return code
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), selfHostSplineWasm],
  // CommonJS-only packages; bundle them so the prerender step can import named exports.
  ssr: { noExternal: ['react-vertical-timeline-component', 'react-tilt'] },
})
