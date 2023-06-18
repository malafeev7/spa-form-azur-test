import styled from 'styled-components';
import colors from 'global_styling/colors';

const ButtonBack = styled.button`
  display: flex;
  align-items: center;
  gap: 20px;
  border: none;
  background-color: ${colors.WHITE};
  font-size: 20px;
  cursor: pointer;
`;

const BannerImg = styled.img`
  margin-top: 100px;
`;

const Title = styled.span`
  color: ${colors.BLACK};
  font-weight: 500;
  font-size: 32px;
  margin-top: 56px;
`;

const ButtonDone = styled.button`
  background: ${colors.PURPLE};
  display: flex;
  justify-content: center;
  color: ${colors.WHITE};
  max-width: 620px;
  padding: 24px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 20px;
  margin-top: 60px;
`;

export { ButtonBack, BannerImg, Title, ButtonDone };
