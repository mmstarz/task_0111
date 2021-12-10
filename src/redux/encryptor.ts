import { createTransform } from 'redux-persist';
import CryptoJS from 'crypto-js';
import { RootStateType } from 'redux/rootReducer';

const secretKey = 'a-b-a-b-a-g-a-l-a-m-a-g-a';

const encryptor: any = createTransform(
  (inboundState: RootStateType, key) => {
    if (!inboundState) return inboundState;
    const cryptedText = CryptoJS.AES.encrypt(
      JSON.stringify(inboundState),
      secretKey,
    );
    return cryptedText.toString();
  },
  (outboundState: string, key) => {
    if (!outboundState) return outboundState;
    const bytes = CryptoJS.AES.decrypt(outboundState, secretKey);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);

    return JSON.parse(decrypted);
  },
);

export default encryptor;
