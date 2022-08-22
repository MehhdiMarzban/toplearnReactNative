import { I18nManager } from "react-native";
import { useFonts } from "expo-font";

//* add support rtl
I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

export default function AppInitializer({ children }) {
    //* loading fonts
    const [isLoadedFont] = useFonts({
        vazir: require("../../assets/fonts/Vazir.ttf"),
        "vazir-bold": require("../../assets/fonts/Vazir-Bold.ttf"),
    });
    if (!isLoadedFont) return null;
    return <>{children}</>;
}
