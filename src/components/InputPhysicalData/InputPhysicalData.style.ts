import styled from 'styled-components';
import IconArrow from 'assets/img/IconArrow.svg';
import colors from 'global_styling/colors';

const InputBox = styled.div`
  display: flex;
  width: 100%;
  max-width: 620px;
  gap: 10px;
  div {
    width: 100%;
  }
  .custom-select {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .custom-select select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    max-width: 620px;
    margin-bottom: 8px;
    margin-top: 10px;
    padding: 24px 18px;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    background: ${colors.WHITE};
    border: 0.5px solid ${colors.GREY};
    border-radius: 4px;
  }

  .custom-select::after {
    content: '';
    position: absolute;
    top: 45%;
    right: 10px;
    width: 30px;
    height: 30px;
    background: url(${IconArrow}) no-repeat center center;
    pointer-events: none;
  }
`;

const Input = styled.input`
  width: 100%;
  max-width: 620px;
  margin-bottom: 8px;
  margin-top: 10px;
  padding: 24px 18px;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  background: white;
  border: 0.5px solid ${colors.GREY};
  border-radius: 4px;
`;

export { InputBox, Input };
