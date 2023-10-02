// .storybook/main.ts

// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  framework: '@storybook/react-webpack5',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    // Other Storybook addons
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    'storybook-addon-material-ui',
    "@storybook/addon-mdx-gfm",
    '@storybook/addon-styling'
  ],
};

export default config;