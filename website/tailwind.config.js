export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    ],
    daisyui: {
      
    },
    plugins: [
      require("daisyui")
    ],
  }