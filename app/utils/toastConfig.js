import { SuccessToast } from "react-native-toast-message";
import Toast from "../components/shared/Toast";


const toastConfig = {
    success: (props) => {
        return (
            <SuccessToast
                {...props}
                text1Style={{ fontFamily: "vazir" }}
                text2Style={{ fontFamily: "vazir" }}
            />
        );
    },
    custom: Toast 
};



export default toastConfig;
