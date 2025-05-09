import React, { useContext, useState } from 'react';
import styles from './InputField.module.scss';
import { FormContext } from '../../context/FormContext';

const InputField = ({ label, name, type = 'text'}) => {
    const { formData, updateField} = useContext(FormContext);
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === 'password';
    return (
        <div className={styles.inputGroup}>
            <label>{label}</label>
            <input 
                type={isPassword && showPassword ? 'text' : type}
                value={formData[name]}
                onChange={e => updateField(name, e.target.value)}
            />

        {isPassword && (
            <label className={styles.checkBox}>
                <input 
                    type="checkbox"
                    checked={showPassword}
                    onChange={() => setShowPassword(prev => !prev)}
                />
                Exibir Senha
            </label>
        )}
        </div>
    );
};

export default InputField;
