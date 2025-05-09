import React, { useContext } from 'react';
import styles from './InputField.module.scss';
import { FormContext } from '../../context/FormContext';

const InputField = ({ label, name, type = 'text'}) => {
    const { formData, updateField} = useContext(FormContext);
    return (
        <div className={styles.inputGroup}>
            <label>{label}</label>
            <input 
                type={type}
                value={formData[name]}
                onChange={e => updateField(name, e.target.value)}
            />
        </div>
    );
};

export default InputField;
