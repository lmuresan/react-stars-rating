# react-stars-rating

[![NPM](https://nodei.co/npm/react-stars-rating.png?compact=true)](https://npmjs.org/package/react-stars-rating)

react-stars-rting is a react component that allows you to add ratings to your applications.

## Usage
### Install
```sh
$ npm install react-stars-rating --save
```
or 
```sh
$ yarn add react-stars-rating
```
### Usage
```javascript
import StarsRating from 'react-stars-rating';
```
### Example
```js
import React from 'react';
import StarsRating from 'react-stars-rating';

class MyComponent extends React.Component {
  render() {
    return (
      <StarsRating rating={3} />
    );
  }
}

React.render(<MyComponent />, document.getElementById('app'));
```

## PropTypes

| Prop Name     | Type     | Default                   | Required | Description                                                            |
|---------------|----------|---------------------------|----------|------------------------------------------------------------------------|
| name          | String   | rating-123456 (timestamp) | false    | name of the rating used when the component is inside a form            | 
| disabled      | Boolean  | false                     | false    | disable the stars                                                      |
| insideForm    | Boolean  | false                     | false    | is the rating stars inside a form                                      |
| onRatingClick | Function | () => false               | false    | the callback used by the parent component. Call when a star is clicked |
| rating        | Number   |                           | true     | the rating to display                                                  |
| theme         | String   | orange                    | false    | theme color                                                            |

## Available Themes
| Theme name     | Theme color                                                        |
|----------------|--------------------------------------------------------------------|
| white          | ![#FFFFFF](https://placehold.it/15/FFFFFF/000000?text=+) `#FFFFFF` |
| snow           | ![#F9FAFC](https://placehold.it/15/F9FAFC/000000?text=+) `#F9FAFC` |
| darkSnow       | ![#EFF2F7](https://placehold.it/15/EFF2F7/000000?text=+) `#EFF2F7` |
| extraDarkSnow  | ![#E5E9F2](https://placehold.it/15/E5E9F2/000000?text=+) `#E5E9F2` |
| silver         | ![#8492A6](https://placehold.it/15/8492A6/000000?text=+) `#8492A6` |
| slate          | ![#3C4858](https://placehold.it/15/3C4858/000000?text=+) `#3C4858` |
| steel          | ![#273444](https://placehold.it/15/273444/000000?text=+) `#273444` |
| black          | ![#1F2D3D](https://placehold.it/15/1F2D3D/000000?text=+) `#1F2D3D` |
| smoke          | ![#E0E6ED](https://placehold.it/15/E0E6ED/000000?text=+) `#E0E6ED` |
| darkSmoke      | ![#D3DCE6](https://placehold.it/15/D3DCE6/000000?text=+) `#D3DCE6` |
| extraDarkSmoke | ![#C0CCDA](https://placehold.it/15/C0CCDA/000000?text=+) `#C0CCDA` |
| lightBlue      | ![#85D7FF](https://placehold.it/15/85D7FF/000000?text=+) `#85D7FF` |
| blue           | ![#1FB6FF](https://placehold.it/15/1FB6FF/000000?text=+) `#1FB6FF` |
| darkBlue       | ![#009EEB](https://placehold.it/15/009EEB/000000?text=+) `#009EEB` |
| lightPurple    | ![#A389F4](https://placehold.it/15/A389F4/000000?text=+) `#A389F4` |
| purple         | ![#7E5BEF](https://placehold.it/15/7E5BEF/000000?text=+) `#7E5BEF` |
| darkPurple     | ![#592DEA](https://placehold.it/15/592DEA/000000?text=+) `#592DEA` |
| lightPink      | ![#FF7CE5](https://placehold.it/15/FF7CE5/000000?text=+) `#FF7CE5` |
| pink           | ![#FF49DB](https://placehold.it/15/FF49DB/000000?text=+) `#FF49DB` |
| darkPink       | ![#FF16D1](https://placehold.it/15/FF16D1/000000?text=+) `#FF16D1` |
| lightOrange    | ![#FF9E7C](https://placehold.it/15/FF9E7C/000000?text=+) `#FF9E7C` |
| orange         | ![#FF7849](https://placehold.it/15/FF7849/000000?text=+) `#FF7849` |
| darkOrange     | ![#FF5216](https://placehold.it/15/FF5216/000000?text=+) `#FF5216` |
| lightGreen     | ![#29EB7F](https://placehold.it/15/29EB7F/000000?text=+) `#29EB7F` |
| green          | ![#13CE66](https://placehold.it/15/13CE66/000000?text=+) `#13CE66` |
| darkGreen      | ![#0F9F4F](https://placehold.it/15/0F9F4F/000000?text=+) `#0F9F4F` |
| lightYellow    | ![#FFD55F](https://placehold.it/15/FFD55F/000000?text=+) `#FFD55F` |
| yellow         | ![#FFC82C](https://placehold.it/15/FFC82C/000000?text=+) `#FFC82C` |
| darkYellow     | ![#F8B700](https://placehold.it/15/F8B700/000000?text=+) `#F8B700` |
| info           | ![#1FB6FF](https://placehold.it/15/1FB6FF/000000?text=+) `#1FB6FF` |
| success        | ![#13CE66](https://placehold.it/15/13CE66/000000?text=+) `#13CE66` |
| danger         | ![#FF4949](https://placehold.it/15/FF4949/000000?text=+) `#FF4949` |
| warning        | ![#FFC82C](https://placehold.it/15/FFC82C/000000?text=+) `#FFC82C` |

## Mentions
This component is inspired by the following [codepen](https://codepen.io/fusco/pen/MwawEL) by [Joseph Fusco](https://twitter.com/heyfusco) and also many thanks to the guys from Marvel for having such a perfect [color scheme](https://marvelapp.com/styleguide/design/color-scheme).