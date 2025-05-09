import React, { useContext, useState } from "react";
import FormSection from "../FormSection/FormSection";
import { FormContext } from "../../context/FormContext";
import { generateQrCodeUrl } from "../../services/apiService";
import styles from './FormPage.module.scss';

const FormPage = () => {
    const { formData } = useContext(FormContext);
    const [qrCodeUrl, setQrCodeUrl] = useState('');       
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState('');             
  
    const handleSubmit = async () => {
        try {
          setLoading(true);
          setError('');
          const apiUrl = generateQrCodeUrl(formData);
          console.log("Form data:", formData);
          console.log("QR URL:", apiUrl);
          setQrCodeUrl(apiUrl);      
        } catch (err) {
          console.error(err);
          setError('Falha ao gerar QR Code');
        } finally {
          setLoading(false);
        }
      };
  
    return (
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <h1>QR Code Comunicação Corporativa </h1>
          <FormSection />
          <button onClick={handleSubmit} disabled={loading}>
            {loading ? 'Gerando...' : 'Gerar QR Code'}
            </button>
            {error && <p className={styles.error}>{error}</p>}
        </div>
        <div className={styles.qrCodeBox}>
            {!qrCodeUrl && <p>QR Code</p>}
             {qrCodeUrl && (
             <img 
                 src={qrCodeUrl}
                alt="QR Code Gerado"
             />
            )}
        </div>
    </div>
    );
};

export default FormPage;
