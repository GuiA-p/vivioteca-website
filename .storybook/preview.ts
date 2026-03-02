import '@/styles/globals.css';

import type { Preview } from '@storybook/nextjs-vite';

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: 'Background', value: '#F2F2F2' },
        { name: 'Primary', value: '#BF815E' },
        { name: 'Dark', value: '#401D10' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview;
