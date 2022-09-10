import { I18nManager } from "react-native";
import { useFonts } from "expo-font";
import Toast from "react-native-toast-message";
import { useEffect, useState } from "react";
import netInfo from "@react-native-community/netinfo";
import { Provider } from "react-redux";

import { store } from "../../redux/store";
import toastConfig from "../../utils/toastConfig";
import NetAlert from "../shared/NetAlert";
import { ToplearnProvider } from "../../context";
import CartAlert from "../cart/CartAlert";

//* add support rtl
I18nManager.forceRTL(true);
I18nManager.allowRTL(true);

export default function AppInitializer({ children }) {
    //* disconnect alert
    const [isConnected, setIsConnected] = useState(true);
    useEffect(() => {
        //* one of way of using netinfo
        // netInfo.fetch().then((value) => setIsConnected(!value.isConnected));

        //* this is second way of using netinfo
        netInfo.addEventListener((state) => setIsConnected(state.isConnected));
    });

    //* loading fonts
    const [isLoadedFont] = useFonts({
        vazir: require("../../assets/fonts/Vazir.ttf"),
        "vazir-bold": require("../../assets/fonts/Vazir-Bold.ttf"),
    });
    if (!isLoadedFont) return null;
    return (
        <>
            <Provider store={store}>
                <ToplearnProvider>
                    {children}
                    <Toast config={toastConfig} />
                    {/* showing cart */}
                    <CartAlert />
                    {isConnected ? null : <NetAlert />}
                </ToplearnProvider>
            </Provider>
        </>
    );
}
