import { SuccessToast } from "react-native-toast-message";

const toastConfig = {
    success: (props) => {
        return (
            <SuccessToast
                {...props}
                text1Style={{ fontFamily: "vazir"}}
                text2Style={{ fontFamily: "vazir" }}
            />
        );
    },
};

export default toastConfig;
