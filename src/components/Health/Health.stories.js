import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Health from './Health';

storiesOf('Health', module)
  .add('Default healthbar', () => {
  	const health = {
	  id: "1",
	  title: "health test",
	  maxValue: 100,
	  value: 75,
	  name: "player",
	};
  	return (<Health {...health} />)
  })
  .add('Healthbar with width', () => {
  	const health = {
	  id: "1",
	  title: "health test",
	  maxValue: 100,
	  value: 75,
	  name: "player",
	  width: "200px",
	};
  	return (<Health {...health} />)
  });