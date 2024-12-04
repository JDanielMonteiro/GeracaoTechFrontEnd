import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProductOptions = ({ options, radius, shape, type }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const getStyle = (option) => {
    const isSelected = option === selectedOption;
    const commonStyles = {
      display: 'inline-block',
      cursor: 'pointer',
      margin: '5px',
      border: isSelected ? '2px solid #C92071' : '1px solid #d3d3d3', 
    };

    if (shape === 'square') {
      return {
        ...commonStyles,
        width: '46px',
        height: '46px',
        borderRadius: radius,
        backgroundColor: type === 'color' ? option : '', 
        textAlign: 'center',
        lineHeight: '46px',
        fontSize: type === 'text' ? '24px' : 'none',
        color: type === 'text' ? '#333' : 'transparent',
      };
    } else if (shape === 'circle') {
      return {
        ...commonStyles,
        width: '31px',
        height: '31px',
        borderRadius: '50%',
        backgroundColor: type === 'color' ? option : '', 
      };
    }
  };

  return (
    <div>
      {options.map((option, index) => (
        <div
          key={index}
          style={getStyle(option)}
          onClick={() => handleOptionClick(option)}
        >
          {type === 'text' && option}
        </div>
      ))}
    </div>
  );
};

ProductOptions.propTypes = {
  options: PropTypes.array.isRequired,
  radius: PropTypes.string,
  shape: PropTypes.oneOf(['square', 'circle']).isRequired,
  type: PropTypes.oneOf(['text', 'color']).isRequired,
};

ProductOptions.defaultProps = {
  radius: '4px', // Valor padrão do border-radius
};

export default ProductOptions;
