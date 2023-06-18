import React from 'react';
import { ButtonBack, BannerImg, Title, ButtonDone } from './AlreadyAppliedEmail.style';
import { default as IconBack } from 'assets/img/IconBack.svg';
import Banner from 'assets/img/Banner.webp';
import { handleReloadPage } from 'utils/handleReloadPage';
import { alreadyAppliedEmailTexts } from 'text';

export const AlreadyAppliedEmail = () => {
  return (
    <>
      <ButtonBack onClick={handleReloadPage}>
        <img src={IconBack} alt='IconBack' />
        {alreadyAppliedEmailTexts.buttonBack}
      </ButtonBack>
      <BannerImg src={Banner} alt='banner' />
      <Title>{alreadyAppliedEmailTexts.title}</Title>
      <ButtonDone onClick={handleReloadPage}>{alreadyAppliedEmailTexts.buttonDone}</ButtonDone>
    </>
  );
};
