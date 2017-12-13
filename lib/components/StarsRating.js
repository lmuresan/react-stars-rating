import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Star from '../elements/Star';
import * as AVAILABLE_THEMES from '../styles/colors';

/**
 * @fileoverview react-stars-rating
 * @author @lmuresan
 * @example
 * <StarsRating
 *   name={string} - name for form input
 *   rating={number} - a set rating between the rating amount (optional)
 *   insideForm={boolean} - is the rating inside a form to create the hidden input so it will submit the rating (optional)
 *   disabled={boolean} - is the rating disabled (optional)
 *   onRatingClick={function} - a handler function that gets called onClick of the rating (optional)
 *   theme={string} - name of the theme colors to e used
 * />
 */
class StarsRating extends Component {
  
  /**
   * Component state
   */
  state = {
    currentRating: null,
    stars: [],
  };

  /**
   * React lifecycle method - componentWillMount
   */
  componentWillMount() {
    this.setupStars(this.props);
  }

  /**
   * React lifecycle method - componentWillReceiveProps
   */
  componentWillReceiveProps(nextProps) {
    this.setupStars(nextProps);
  }

  /**
   * Generate the array of stars
   */  
  setupStars({disabled, rating}) {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      const star = {
        index: i,
        disabled,
        onClick: this.handleClickOnStar,
        checked: ((i + 1) <= rating),
      };

      stars.push(star);
    }

    this.setState({
      currentRating: rating,
      stars,
    });
  }

  /**
   * Callback handler for the click event on a star
   */
  handleClickOnStar = (starValue) => {
    // generate the new stars
    this.setupStars({
      disabled: this.props.disabled,
      rating: starValue,
    });

    // call the outside handler
    this.props.onRatingClick(starValue);
  };

  /**
   * Render the container where all the stars will be rendered
   * @returns {Object} JSX HTML markup
   */  
  renderStarsContianer() {
    const {stars} = this.state;
    const {theme} = this.props;
    const styles = {
      display: 'inline-block',
    };
    let currentTheme = theme;

    if (!AVAILABLE_THEMES[currentTheme]) {
      currentTheme = 'orange';
    }

    return (
      <span className="lm-stars-rating__container" style={styles}>
        {stars.map((star, index) => (
          <Star key={index} theme={currentTheme} {...star} />
        ))}
      </span>
    );
  }

  /**
   * Render the hidden field use when the rating is inside a form. We use an input hidden to automatically submit the data with the other form values
   * @returns {Object | null} JSX HTML markup when the component is rendered inside a form or null
   */
  renderRatingHiddenField() {
    const {
      insideForm,
      name,
      rating,
    } = this.props

    if (insideForm) {
      return (
        <input type="hidden" value={rating} name={name} />
      );
    }

    return null;
  }

  /**
   * React lifecycle method: render
   * @returns {Object} JSX HTML markup
   */
  render() {
    return (
      <span className="lm-stars-rating">
        {this.renderStarsContianer()}
        {this.renderRatingHiddenField()}
      </span>
    );
  }
}

StarsRating.defaultProps = {
  name: `rating-${Date.now()}`,
  disabled: false,
  insideForm: false,
  onRatingClick: () => false,
  theme: 'orange',
};

StarsRating.propTypes = {
  name: PropTypes.string,
  disabled: PropTypes.bool,
  insideForm: PropTypes.bool,
  rating: PropTypes.number.isRequired,
  onRatingClick: PropTypes.func,
  theme: PropTypes.string,
};

export default StarsRating;