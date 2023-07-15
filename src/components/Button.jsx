import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Button = ({ color, backgroundColor, label, ...props }) => {
  return (
    <DefaultButton $color={color} $backgroundColor={backgroundColor} {...props}>
      {label}
    </DefaultButton>
  )
}

const DefaultButton = styled.button`
  color: ${(props) => (props.$color ? props.$color : '#000')};
  background-color: ${(props) =>
    props.$backgroundColor ? props.$backgroundColor : '#BF4F74'};
  font-family: Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-flex;
  line-height: 1;
`

Button.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  backgroundColor: null,
  color: null,
  onClick: undefined,
}
