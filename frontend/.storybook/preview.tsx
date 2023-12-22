import type { Preview } from "@storybook/react";
import React from "react";
// import {ThemeProvider} from 'styled-components'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // decorators: [
  //   (Story) => (
  //     <ThemeProvider theme="default">
  //       <Story />
  //     </ThemeProvider>
  //   ),
  // ],
};

export default preview;
