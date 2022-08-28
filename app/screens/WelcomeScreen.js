import { StyleSheet, View, ImageBackground, Image, StatusBar } from "react-native";
import netInfo from "@react-native-community/netinfo";
import { useEffect, useState } from "react";

import CustomOpacityButton from "../components/CustomButtons/CustomOpacityButton";
import BoldText from "../components/CustomTexts/BoldText";
import NetAlert from "../components/shared/NetAlert";
import COLORS from "../styles/colors.json";

export default function WelcomeScreen({ navigation }) {
    const [isConnected, setIsConnected] = useState(true);

    useEffect(() => {
        //* one of way of using netinfo
        // netInfo.fetch().then((value) => setIsConnected(!value.isConnected));
        
        //* this is second way of using netinfo
        netInfo.addEventListener(state => setIsConnected(state.isConnected));
    }, []);

    return (
        <ImageBackground
            blurRadius={3}
            source={require("../assets/bg1.jpg")}
            style={styles.imageBackground}>
            <StatusBar translucent backgroundColor="transparent" />

            {isConnected ? null : <NetAlert />}

            <View style={styles.topContainer}>
                <Image source={require("../assets/logo.png")} style={styles.logoImage} />
                <BoldText style={styles.textHeader} fontSize={2}>
                    خودآموزی ، کسب تجربه ، ورود به بازار کار با تاپ لرن
                </BoldText>
            </View>
            <View style={styles.bottomContainer}>
                <CustomOpacityButton
                    title="ورود"
                    onPress={() => {
                        navigation.navigate("LoginScreen");
                    }}
                    width={"100%"}
                />
                <CustomOpacityButton
                    title="ثبت نام"
                    onPress={() => {
                        navigation.navigate("RegisterScreen");
                    }}
                    width={"100%"}
                    color={COLORS.MAGENTA_PURPLE}
                />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bottomContainer: {
        backgroundColor: "tansparent",
        alignItems: "center",
        justifyContent: "flex-end",
        width: "100%",
        padding: 20,
    },
    topContainer: {
        backgroundColor: "tansparent",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: 20,
    },
    imageBackground: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: StatusBar.currentHeight,
    },
    logoImage: {
        width: 120,
        height: 85,
    },
    textHeader: {
        color: "#82589F",
        marginVertical: 40,
        textAlign: "center",
    },
});
