import styled from "@emotion/styled/macro";

export const Form = styled.form`
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;
  width: 100%;
  max-width: 600px;
  border-bottom: 2px solid #2196f3;
  overflow: hidden;
`;

export const SearchFormBtn = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;

  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &:placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
