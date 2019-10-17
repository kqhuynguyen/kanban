import React, { useState } from "react";
import styled from "styled-components";

const StyledAddNewCardButton = styled.div`


  height: 40px;
  width: 90%;
  margin: 0 auto;
  padding: 2% 0;
  background: #A8EB12;
  margin-bottom: 20px;
  line-height: 40px;
  padding-left: 10px;
  text-align: center;

  :hover {
      cursor: pointer;
  }
`;


const AddNewCardButton = ({onClick}) => {
  
  return (
        <StyledAddNewCardButton onClick={onClick}>
          New!
        </StyledAddNewCardButton>
      );
};

export default AddNewCardButton;