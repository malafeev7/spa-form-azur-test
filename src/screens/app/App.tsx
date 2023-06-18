import React from 'react';
import './App.css';
import { FormFirstStep } from 'components/FormFirstStep';
import { FormProvider } from 'components/context/FormProvider';

function App() {
  return (
    <FormProvider>
      <div className='App'>
        <FormFirstStep />
      </div>
    </FormProvider>
  );
}

export default App;
