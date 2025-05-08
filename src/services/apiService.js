export const generateQrCodeUrl = (formData) => {
    const { usuario, senha, servidor, porta } = formData;

    const intelbrasUrl = 
    `http://www.intelbras.com.br/` +
    `?SIP_user=${encodeURIComponent(usuario)}` +
    `&SIP_pass=${encodeURIComponent(senha)}` +
    `&SIP_IP=${encodeURIComponent(servidor)}` +
    `&SIP_port=${encodeURIComponent(porta)}` +
    `&SIP_IP_NAT=` +
    `&SIP_port_NAT=${encodeURIComponent(porta)}` +
    `&SIP_protocol=UDP` +
    `&RTP_protocol=RTP` +
    `&RTP_codec=PCMA,PCMU,,` +
    `&DTMF=SIPInfo`;

    const size = '200x200';
    const dataForQr = encodeURIComponent(intelbrasUrl);
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}&data=${dataForQr}`;
    return apiUrl;
  };