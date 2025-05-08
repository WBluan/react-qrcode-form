import CryptoJS from 'crypto-js';

const SECRET_KEY = 'sua_chave_secreta';

export const encryptData = (data) => {
  const stringData = JSON.stringify(data);
  return CryptoJS.AES.encrypt(stringData, SECRET_KEY).toString();
};

