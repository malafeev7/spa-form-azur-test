import styled from 'styled-components';
import colors from 'global_styling/colors';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 620px;
  div {
    display: flex;
    gap: 10px;
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
  background: ${colors.WHITE};
  border: 0.5px solid ${colors.GREY};
  border-radius: 4px;
`;

export { Box, Input };
