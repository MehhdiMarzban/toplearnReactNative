import { SuccessToast, InfoToast } from "react-native-toast-message";

import Toast from "../components/shared/Toast";
import globalStyles from "../styles/globalStyles";

const toastConfig = {
    success: (props) => {
        return (
            <SuccessToast
                {...props}
                text2Style={{
                    fontFamily: "vazir",
                    fontSize: 12,
                    color: globalStyles.COLORS.GREY,
                }}
            />
        );
    },
    info: (props) => {
        return (
            <InfoToast
                {...props}
                text2Style={{
                    fontFamily: "vazir-bold",
                    fontSize: 12,
                    color: globalStyles.COLORS.GREY,
                }}></InfoToast>
        );
    },
    custom: Toast,
};

export default toastConfig;
