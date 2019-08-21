import { configure, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import globallogic from './globallogic';

// Option defaults.
addParameters({
  options: {
    theme: globallogic,
  },
});


function loadStories() {
  require('../stories');
}

configure(loadStories, module);

