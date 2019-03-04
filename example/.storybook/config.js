import { configure } from '@storybook/react';

import { configureViewport } from '@storybook/addon-viewport';

configureViewport({
  defaultViewport: 'iphone6'
});

// const req = require.context('../src', true, /index.story.js$/);
function loadStories() {
  // req.keys().forEach(filename => req(filename));
  require('../index.story.js');
}

configure(loadStories, module);
