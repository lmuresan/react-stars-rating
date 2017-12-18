import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import StarsRating from '../lib/index';

storiesOf('Ratings', module)
  .add('with rating set as 0', () => <StarsRating rating={0} />)
  .add('with rating set as 1', () => <StarsRating rating={1} />)
  .add('with rating set as 2', () => <StarsRating rating={2} />)
  .add('with rating set as 3', () => <StarsRating rating={3} />)
  .add('with rating set as 4', () => <StarsRating rating={4} />)
  .add('with rating set as 5', () => <StarsRating rating={5} />);

storiesOf('Click callback', module)
  .add('onRatingClick', () => <StarsRating rating={2} onRatingClick={action('New rating clicked')} />);

storiesOf('Disable rating', module)
  .add('disabled={true}', () => <StarsRating rating={4} disabled={true} />);

storiesOf('Themes', module)
  .add('theme is not passed', () => <StarsRating rating={4} />)
  .add('theme="darkBlue"', () => <StarsRating rating={4} theme="darkBlue" />)
  .add('theme="lightPink"', () => <StarsRating rating={4} theme="lightPink" />)
  .add('theme="yellow"', () => <StarsRating rating={4} theme="yellow" />)
  .add('theme="success"', () => <StarsRating rating={4} theme="success" />);  