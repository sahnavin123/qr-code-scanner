// import react from '@vitejs/plugin-react-swc';
// import path from 'path';
// import fs from 'fs';
// import { defineConfig } from 'vite';
// const injectCssPlugin = () => {
//   let localCssContent = '';
//   return {
//     name: 'inject-css',
//     buildStart() {
//       const cssPath = path.resolve(__dirname, 'src/components/QrScanner.css');
//       try {
//         localCssContent = fs.readFileSync(cssPath, 'utf-8');
//       } catch (error) {
//         console.warn('Could not read local CSS file:', error.message);
//       }
//     },
//     generateBundle(options, bundle) {
//       let collectedCss = localCssContent;
//       // Capture and remove all CSS assets (e.g., toastify)
//       for (const fileName in bundle) {
//         const chunk = bundle[fileName];
//         if (chunk.type === 'asset' && fileName.endsWith('.css')) {
//           const assetCss = typeof chunk.source === 'string' ? chunk.source : chunk.source.toString();
//           collectedCss += '\n' + assetCss;
//           delete bundle[fileName];
//         }
//       }
//       if (!collectedCss) {
//         console.warn('No CSS to inject');
//         return;
//       }
//       const injectCode = `(function() {
//         if (typeof document !== 'undefined' && !document.getElementById('scanner-injected-css')) {
//           const style = document.createElement('style');
//           style.id = 'scanner-injected-css';
//           style.textContent = ${JSON.stringify(collectedCss)};
//           document.head.appendChild(style);
//         }
//       })();`;
//       // Inject into main JS outputs for both formats
//       for (const fileName in bundle) {
//         const chunk = bundle[fileName];
//         if (chunk.type === 'chunk' && fileName.includes('index.') && (fileName.endsWith('.js') || fileName.endsWith('.cjs'))) {
//           chunk.code += `\n\n${injectCode}`;
//         }
//       }
//     },
//     writeBundle() {
//       // Fallback: Delete any remaining CSS files after build
//       const outDir = path.resolve(__dirname, 'build');
//       try {
//         const files = fs.readdirSync(outDir);
//         files.forEach(file => {
//           if (file.endsWith('.css')) {
//             fs.unlinkSync(path.join(outDir, file));
//             console.log(`Deleted CSS file: ${file}`);
//           }
//         });
//       } catch (error) {
//         console.warn('Could not delete CSS files:', error.message);
//       }
//     },
//   };
// };
// export default defineConfig({
// 	plugins: [react(), injectCssPlugin()],
// 	build: {
// 		lib: {
// 			entry: path.resolve(__dirname, 'src/index.ts'),
// 			name: 'Scanner',
// 			fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
// 			formats: ['es', 'cjs'],
// 		},
// 		rollupOptions: {
// 			external: ['react', 'react-dom'],
// 			output: {
// 				globals: {
// 					react: 'React',
// 					'react-dom': 'ReactDOM',
// 				},
// 			},
// 		},
// 		outDir: 'build',
// 		sourcemap: true,
// 	},
// });
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

function injectCssPlugin() {
	return {
		name: 'inject-css',
		generateBundle(_, bundle) {
			let collectedCss = '';

			// Collect and remove CSS assets
			for (const fileName in bundle) {
				const chunk = bundle[fileName];
				if (chunk.type === 'asset' && fileName.endsWith('.css')) {
					collectedCss += '\n' + chunk.source.toString();
					delete bundle[fileName]; // prevent separate .css output
				}
			}

			if (!collectedCss) return;

			// Build runtime <style> injection
			const injectCode = `
      (function() {
        if (typeof document !== 'undefined' && !document.getElementById('scanner-injected-css')) {
          const style = document.createElement('style');
          style.id = 'scanner-injected-css';
          style.textContent = ${JSON.stringify(collectedCss)};
          document.head.appendChild(style);
        }
      })();`;

			// Append injection code into each JS chunk
			for (const fileName in bundle) {
				const chunk = bundle[fileName];
				if (
					chunk.type === 'chunk' &&
					fileName.startsWith('index.') &&
					(fileName.endsWith('.js') || fileName.endsWith('.cjs'))
				) {
					chunk.code += `\n${injectCode}`;
				}
			}
		},
	};
}

export default defineConfig({
	plugins: [react(), injectCssPlugin()],
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			name: 'Scanner',
			fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
			formats: ['es', 'cjs'],
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
				},
			},
		},
		outDir: 'build',
		sourcemap: true,
		cssCodeSplit: true, // still needed so Vite emits CSS assets before we capture them
	},
});
