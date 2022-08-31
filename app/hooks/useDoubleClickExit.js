import { useNavigationState } from "@react-navigation/native";
import { useEffect } from "react";
import Toast from "react-native-toast-message";
import { BackHandler } from "react-native";

const useDoubleClickExit = (message) => {
    //* double back for exit
    const indexScreen = useNavigationState((state) => state.index);
    console.log(indexScreen);
    useEffect(() => {
        let clickNumber = 0;
        if (indexScreen > 0) {
            return;
        }
        const backHandlerListenter = BackHandler.addEventListener("hardwareBackPress", () => {
            if (clickNumber <= 0) {
                clickNumber += 1;
                Toast.show({
                    text2: message ? message : "برای خروج دوباره کلیک کنید!",
                    type: "info",
                    position: "bottom",
                });
            } else {
                BackHandler.exitApp();
            }
            setTimeout(() => {
                clickNumber = 0;
            }, 2000);
            return true;
        });
        //* in unmounting remove listener
        // return () => backHandlerListenter.remove();
    }, []);
};


export default useDoubleClickExit;