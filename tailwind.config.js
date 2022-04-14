module.exports = {
    mode: 'jit',
    plugins: [
      require('@tailwindcss/typography')
    ],
    purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}']
  };