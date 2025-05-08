import React from 'react';
import FormPage from './components/FormPage/FormPage';
import { FormProvider } from './context/FormContext';

const App = () => (
    <FormProvider>
        <FormPage />
    </FormProvider>
)

export default App;