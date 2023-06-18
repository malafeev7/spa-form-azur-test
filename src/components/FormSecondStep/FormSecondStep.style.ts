import styled from 'styled-components';
import IconArrow from 'assets/img/IconArrow.svg';
import colors from 'global_styling/colors';

const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 600px;
  div {
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
    background: white;
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

const Title = styled.span`
  color: ${colors.BLACK};
  font-weight: 500;
  font-size: 32px;
`;

const BoxExactTime = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  gap: 20px;
  width: 100%;
  .active {
    color: ${colors.PURPLE};
    background-color: ${colors.LIGHT_PURPLE};
    border: none;
  }
`;
const ExactTime = styled.div`
  border: 0.5px solid ${colors.GREY};
  border-radius: 26px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  padding: 18px 42px;
  cursor: pointer;
  width: 100%;
`;

const TypeCall = styled.div`
  border-radius: 3px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  padding: 18px 42px;
  background-color: ${colors.LIGHT_GREY};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

const ButtonNext = styled.button`
  background: ${(props) => (props.disabled ? `${colors.LIGHT_GREY}` : `${colors.PURPLE}`)};
  display: flex;
  justify-content: center;
  color: ${(props) => (props.disabled ? `${colors.LIGHT_GREY}` : `${colors.WHITE}`)};
  max-width: 620px;
  padding: 25px;
  border: none;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  font-weight: 500;
  font-size: 20px;
`;

export { Title, Box, BoxExactTime, ExactTime, TypeCall, ButtonNext };
