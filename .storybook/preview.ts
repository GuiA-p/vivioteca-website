import '@/styles/globals.css';

import type { Preview } from '@storybook/nextjs-vite';

const preview: Preview = {
  parameters: {
    controls: {
      backgrounds: {
        values: [
          {
            name: 'Background',
            value: '#F2F2F2',
          },
          {
            name: 'Primary',
            value: '#BF815E',
          },
          {
            name: 'Dark',
            value: '#401D10',
          },
        ],
      },
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
};

export default preview;
