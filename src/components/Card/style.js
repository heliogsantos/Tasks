import styled from 'styled-components'

export const CardWraper = styled.div `
  width: 100%;
  background: #ffffff;
  border-radius: 2px;
  padding: 20px;
  position: relative;
  margin-bottom: 40px;
  box-shadow: 0px 4px 12px -5px rgba(0,0,0,0.16)
`

export const Title = styled.h2 `
  text-align: center;
  font-weight: 400;
  font-size: 16px;
`
export const CardBody = styled.div `
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px 0 0px 0;

  p {
    font-weight: 400;
    font-size: 13px;
  }
  
  button {
    border-style: none;
    background: transparent;
    cursor: pointer;
  }

  &:last-child {
    cursor: pointer;
  }
`

export const Menu = styled.ul `
  position: absolute;
  right: 0;
  bottom: -120px;
  width: 200px;
  height: 120px;
  background: #ffffff;
  z-index: 2;
  padding: 21px 20px;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 2px -8px 105px -18px rgba(0,0,0,.19);
  -moz-box-shadow: 2px -8px 105px -18px rgba(0,0,0,.19);
  box-shadow: 2px -8px 105px -18px rgba(0,0,0,.19);
  align-items: flex-start;

  &:before {
    content: '';
    width: 17px;
    height: 17px;
    background: #ffffff;
    position: absolute;
    right: 17px;
    top: -7px;
    transform: rotate(46deg);

  }
`

export const List = styled.li `
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
  line-height: 2;
  position: relative;
  margin-left: 20px;
  transition: .2s linear;
  color: ${ props => `var(--${props.color})`};

  &:before {
    content: '';
    width: 15px;
    height: 15px;
    background: ${ props => `var(--${props.color})`};
    position: absolute;
    left: -24px;
    top: 6px;
    border-radius: 10%;
  }

  &:hover {
    opacity: .7;
  }
`