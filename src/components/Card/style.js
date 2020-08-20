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
    font-size: 14px;
  }


  button {
    border-style: none;
    background: transparent;
    cursor: pointer;
  }
`

/*
p {
  font-weight: 300;
  font-size: 14px;
}

.card-body {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px 0 0px 0;
  align-items: center;
}

.card-body .icon {
  cursor: pointer;
}
*/