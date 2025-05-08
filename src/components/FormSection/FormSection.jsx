import React from "react";
import styles from './FormSection.module.scss';
import InputField from "../InputField/InputField";

const FormSection = () => (
    <div className="{styles.section}">
        <InputField label="Usuário" name="usuario" />
        <InputField label="Senha" name="senha" type="password" />
        <div calssName={styles.row}>
            <InputField label="Servidor" name="servidor" />
            <InputField label="Porta" name="porta" />
        </div>
    </div>
);

export default FormSection;
