import styled from 'styled-components';
import colors from 'global_styling/colors';

const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 28px;
  width: 100%;
  max-width: 600px;
`;

const Title = styled.span`
  color: ${colors.BLACK};
  font-weight: 500;
  font-size: 32px;
  width: 100%;
  margin-top: 60px;
`;

const RecordBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
  border: 1px solid ${colors.GREY};
  border-radius: 8px;
  gap: 34px;

  p {
    display: flex;
    gap: 16px;
    font-size: 18px;
  }
`;

export { Box, Title, RecordBox };
