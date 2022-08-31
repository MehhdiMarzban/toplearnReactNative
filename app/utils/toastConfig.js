import { SuccessToast, InfoToast } from "react-native-toast-message";

import Toast from "../components/shared/Toast";
import COLORS from "../styles/colors.json";

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
    info: (props) => {
        return (
            <InfoToast
                {...props}
                text2Style={{ fontFamily: "vazir-bold" ,fontSize: 12, color: COLORS.GREY_COLOR}}
            >
            </InfoToast>
        );
    },
    custom: Toast 
};



export default toastConfig;
