import { I18nManager } from "react-native";
import { useFonts } from "expo-font";
import Toast from "react-native-toast-message";
import { Provider } from "react-redux";

import { store } from "../../redux/store";
import toastConfig from "../../utils/toastConfig";
import NetAlert from "../Shared/NetAlert";
import { ToplearnProvider } from "../../context";
import CartAlert from "../Cart/CartAlert";

//* add support rtl
I18nManager.forceRTL(true);
I18nManager.allowRTL(true);

export default function AppInitializer({ children }) {
    //* loading fonts
    const [isLoadedFont] = useFonts({
        vazir: require("../../assets/fonts/Vazir.ttf"),
        "vazir-bold": require("../../assets/fonts/Vazir-Bold.ttf"),
    });
    if (!isLoadedFont) return null;

    return (
        <>
            {/* initialize Redux */}
            <Provider store={store}>
                {/* initialize ContextAPI */}
                <ToplearnProvider>
                    {children}
                    <Toast config={toastConfig} />
                    {/* showing cart */}
                    <CartAlert />
                    {/* showing alert when network connection be lost */}
                    <NetAlert />
                </ToplearnProvider>
            </Provider>
        </>
    );
}
