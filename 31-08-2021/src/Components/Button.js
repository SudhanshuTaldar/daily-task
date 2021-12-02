import styled from "styled-components";

export const Button = styled.button `
 width: 200px;
 height: 50px;
 background-color: ${(props) => props.backgroundColor};

 &:hover {
     background-color: coral;
 };

`

export const RedButton = styled.button `
 width: 200px;
 height: 50px;
 background-color: red;


`
export const BlueButton = styled.button `
 width: 200px;
 height: 50px;
 background-color: blue;

`
export const YellowButton = styled.button `
 width: 200px;
 height: 50px;
 background-color: yellow;

`