import { Navigation } from "./Navigation";

export default {
  title: "Navigation/Navigation",
  component: Navigation,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    selected: {
      control: "radio",
      options: [
        "Dash",
        "Shopping",
        "Profile",
        "Recipies",
        "Storage",
        "Profile",
      ],

      description: "The name of the item that is currently selected",
    },
  },
  args: {
    selected: "Dash",
  },
};

export const Default = {
  args: {},
};
