import styled from 'styled-components'

export const Login_Container = styled.div`
  position: absolute;
  top: 25%;
  left: 33%;
  border-radius: 12px;
  width: 33%;
  height: 600px;
  text-align: center;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 8px 0 10px -2px grey;
`

export const Title = styled.h2`
  position: relative;
  color: white;
  z-index: 101;
  top: 25%;
  margin-top: 0%;
  margin-bottom: 10%;
`

export const LoginForm = styled.form`
    position: relative;
    width: 50%;
    padding-top: 25%;
    left: 25%;
`

export const Input = styled.input`
  border: 2px solid white;
  width: 100%;
  padding: 3%;
  margin-bottom: 10%;
  border-radius: 4px;
  background: rgba(255,255,255, 0.0);
  
  ::placeholder {
    color: white;
  }
`

export const RememberMe = styled.label`
  width: 100%;
  text-align: left;
  color: white;
  font-size: 13px;
  display: block;
`

export const RememberCheck = styled.input`
  color: white;
  float: left;
  background: rgba(255,255,255, 0.0);
`

export const LoginFoot = styled.div`
  display: block;
  padding-top: 10%;
`

export const AnchorRight = styled.a`
  color: white;
  float: right;
  font-size: 13px;
  
  :hover{
    color: #003281;
    cursor: pointer;
  }
`

export const AnchorLeft = styled.a`
  color: white;
  float: left;
  font-size: 13px;
  
  :hover{
    color: #003281;
    cursor: pointer;
  }
`

export const Error = styled.p`
 position: absolute;
 width: 50%;
 display: block;
 color: red;
 font-size: 15px; 
 top: 5%;
 left 25%;
`