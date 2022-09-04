import { StyleSheet, View, ImageBackground, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import constants from "expo-constants";
import * as Notification from "expo-notifications";

import CustomOpacityButton from "../components/CustomButtons/CustomOpacityButton";
import BoldText from "../components/CustomTexts/BoldText";
import COLORS from "../styles/colors.json";
import useDoubleClickExit from "../hooks/useDoubleClickExit";

Notification.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

export default function WelcomeScreen({ navigation }) {
    //* this hook handle double click for exit app
    useDoubleClickExit();

    return (
        <ImageBackground
            blurRadius={3}
            source={require("../assets/bg1.jpg")}
            style={styles.imageBackground}>
            <StatusBar translucent backgroundColor="transparent" />

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
                        notificationHandler();
                    }}
                    width={"100%"}
                    color={COLORS.MAGENTA_PURPLE}
                />
            </View>
        </ImageBackground>
    );
}

const notificationHandler = async () => {
    await Notification.scheduleNotificationAsync({
        content: {
            title: "خوش آمدید!",
            body: "امیدواریم بتوانیم در ادامه مسیر همراه و یاری دهنده خوبی برای شما باشیم.💓",
            data: { data: "https://mehdi-marzban.ir" },
            vibrate: true,
            badge: 2,
            color: COLORS.MAGENTA_PURPLE,
            launchImageName: "icon.png"
        },
        trigger: { seconds: 2 },
    });
};

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
        paddingTop: constants.statusBarHeight,
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
