import styled from 'styled-components'

export const ButtonComponent = styled.button `
  border: none;
  cursor: pointer;
  padding: 7px 20px;
  border-radius: 2px;
  color: #ffffff;
  font-size: ${props => `${props.fontSize}px`};
  background: ${props => `var(--${props.bgColorName})`}
`