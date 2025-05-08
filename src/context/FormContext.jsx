import React, { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        usuario: '',
        senha: '',
        servidor: '',
        porta: '',
    });


const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value}));
};

return (
    <FormContext.Provider value={{ formData, updateField}}>
        {children}
    </FormContext.Provider>
);
};