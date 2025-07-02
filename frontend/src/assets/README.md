# Assets

This directory contains static assets that are part of the application's source code and are imported directly into components or CSS files.

Unlike the `public` directory, assets here are processed by Vite during the build. This means:
- They can be hashed for long-term caching.
- They might be optimized (e.g., image minification).
- If an asset is not used, it won't be included in the final build.

Use this folder for assets like:
- Images used within components (e.g., logos, icons).
- Custom fonts.
- Other media files that are part of the component logic. 