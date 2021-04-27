import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    orange: {
      "800": "#FFBA08",
    },
    gray: {
      "50": "#F7FAFC",
      "100": "#EDF2F7",
      "200": "#DADADA",
      "600": "#47585B",
    },
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
  styles: {
    global: {
      body: { bg: "gray.50", color: "gray.600" },
    },
  },
});
