import styled from 'styled-components';
import colors from 'global_styling/colors';

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 620px;
`;

const InputField = styled.input`
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

export { InputWrapper, InputField };
