export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    ],
    daisyui: {
      themes: [
        {
          mytheme: {
            "accent": "#EEEEEE",
            "base-100": "#222831",
          }
        },
      ],
    },
    plugins: [
      require("daisyui")
    ],
  }