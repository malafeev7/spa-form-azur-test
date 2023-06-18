import styled from 'styled-components';
import colors from 'global_styling/colors';

const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 600px;
  padding: 10px;
  .hide {
    display: none;
  }
`;
const ButtonBack = styled.button`
  display: flex;
  align-items: center;
  gap: 20px;
  border: none;
  background-color: ${colors.WHITE};
  cursor: pointer;
  font-size: 20px;
`;

const StepPagination = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  .active {
    border: 8px solid ${colors.PURPLE};
  }
`;

const StepLine = styled.div`
  border: 4px solid ${colors.LIGHT_GREY};
  width: 100%;
  min-width: 120px;
  background: ${colors.LIGHT_GREY};
  border-radius: 10px;
  @media (max-width: 600px) {
    max-width: 100%;
    min-width: 40px;
  }
`;

const Title = styled.span`
  color: ${colors.BLACK};
  font-weight: 500;
  font-size: 32px;
  width: 100%;
`;

const ButtonNext = styled.button`
  background: ${(props) => (props.disabled ? `${colors.LIGHT_GREY}` : `${colors.PURPLE}`)};
  display: flex;
  justify-content: center;
  color: ${(props) => (props.disabled ? `${colors.GREY}` : `${colors.WHITE}`)};
  max-width: 620px;
  padding: 24px;
  border: none;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  font-weight: 500;
  font-size: 20px;
`;

export { Box, ButtonBack, StepPagination, StepLine, Title, ButtonNext };
