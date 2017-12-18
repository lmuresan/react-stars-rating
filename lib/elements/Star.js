import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as colors from '../styles/colors';
import styled from 'styled-components';

const Label = styled.label`
  height: 40px;
  width: 20%;
  display: block;
  position: relative;
  cursor: ${({disabled}) => disabled ? 'normal' : 'pointer'};
  &:after {
    transition: all 0.4s ease-out;
    -webkit-font-smoothing: antialiased;
    position: absolute;
    content: '★';
    color: ${({checked, theme}) => checked ? colors[theme] : '#444444'};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 14px;
  }
`;

// content: ${({checked}) => checked ? '★' : '☆'};

class Star extends Component {
  
  handleForOnStarClick = (evt) => {
    const {
      disabled,
      index,
      onClick,
    } = this.props;

    if (!disabled) {
      onClick(index + 1);
    }
  };

  /**
   * Render method
   * @returns {Object} JSX HTML markup
   */
  render() {
    const {
      disabled,
      index,
      checked,
      theme,
    } = this.props;
    const styles = {
      display: 'inline-block',
      width: '14px',
    };

    return (
      <span className="lm-star" style={styles} onClick={this.handleForOnStarClick}>
        <Label checked={checked} theme={theme} disabled={disabled} />
      </span>
    );
  }
}

Star.defaultProps = {
  disabled: false,
  onClick: () => false,
  checked: false,
};

Star.propTypes = {
  index: PropTypes.number.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  checked: PropTypes.bool,
  theme: PropTypes.string.isRequired,
};

export default Star;