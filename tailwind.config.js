/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // 컴포넌트
    './components/**/*.{js,vue.ts}',

    // 레이아웃
    './layouts/**/*.vue',

    //페이지
    './pages/**/*.vue',

    // 플러그인
    './plugins/**/*.{js,ts}',

    // nuxt 설정
    './nuxt.config.{js,ts}',

    // 시작페이지
    './app.vue',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        honk: ['Honk', 'sans-serif'],
        protest: ['Protest Guerrilla', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
