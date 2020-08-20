import styled from 'styled-components'

export const ButtonComponent = styled.button `
  border: none;
  cursor: pointer;
  padding: ${props => `${props.padding}px`};
  border-radius: 2px;
  color: ${props => props.color};
  font-size: ${props => `${props.fontSize}px`};
  background: ${props => `var(--${props.bgColorName})`}
`