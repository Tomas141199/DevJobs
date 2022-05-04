module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Jost", "sans"],
        heading: ["Commissioner", "sans"],
      },
      colors: {
        "deep-blue": "#191921",
        "primary-gray": "#707070",
        "light-gray": "#E5E7EB",
        "bg-slate": "#F3F4F6",
        "primary-jade": "#10B981",
        "primary-red": "#F94F4F",
        "bg-primary-blue": "#1F2937",
        "bg-light-blue": "#374151",
      },
      spacing: {
        hero: "32rem",
      },
    },
  },
  plugins: [],
};
