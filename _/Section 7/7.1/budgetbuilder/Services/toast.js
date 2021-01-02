
import { Toast } from 'native-base';

const showToast = (valid) => Toast.show({
    text: valid.text,
    buttonText: "Okay",
    duration: 3000,
    position: "top",
    type: valid.type
  });

export default showToast;
