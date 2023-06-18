import { useContext } from 'react';
import { Box, Title, RecordBox } from './SuccessfulEntry.style';
import Banner from 'assets/img/Banner.webp';
import { default as IconCalendar } from 'assets/img/IconCalendar.svg';
import { default as IconMobile } from 'assets/img/IconMobile.svg';
import { default as IconUser } from 'assets/img/IconUser.svg';
import { default as IconTime } from 'assets/img/IconTime.svg';
import { default as IconLink } from 'assets/img/IconLink.svg';
import { FormContext } from 'components/context/FormContext';
import { handleReloadPage } from 'utils/handleReloadPage';
import { ButtonDone } from 'components/AlreadyAppliedEmail/AlreadyAppliedEmail.style';
import { successfulEntryTexts } from 'text';

export const SuccessfulEntry = () => {
  const { selectedDate, selectedHalfSlot, selectedTypeCall } = useContext(FormContext);

  const formattedDate = selectedDate
    ? new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(new Date(selectedDate))
    : '';

  return (
    <Box>
      <img src={Banner} alt='banner' />
      <Title>{successfulEntryTexts.title}</Title>
      <RecordBox>
        <p>
          <img src={IconCalendar} alt='IconCalendar' />
          {`Scheduled for ${formattedDate}`}
        </p>
        <p>
          <img src={IconTime} alt='IconCalendar' />
          {`From ${selectedHalfSlot} `}
          <span style={{ color: 'grey' }}>(~15 mins)</span>
        </p>

        <p>
          <img src={IconUser} alt='IconCalendar' />
          Consultant will be our care counsellor
        </p>
        <p>
          <img src={IconMobile} alt='IconCalendar' />
          {`Consultation will be an ${selectedTypeCall} call`}
        </p>
        <p>
          <img src={IconLink} alt='IconCalendar' />
          Link sent on your email and whatsapp.
        </p>
      </RecordBox>
      <ButtonDone onClick={handleReloadPage}>{successfulEntryTexts.buttonDone}</ButtonDone>
    </Box>
  );
};
