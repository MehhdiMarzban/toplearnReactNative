import { StyleSheet, View, ImageBackground, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import constants from "expo-constants";
import * as Notification from "expo-notifications";

import CustomOpacityButton from "../../components/Buttons/CustomOpacityButton";
import BoldText from "../../components/Texts/BoldText";
import globalStyles from "../../styles/globalStyles";
import useDoubleClickExit from "../../hooks/useDoubleClickExit";
import routes from "../../routes/configs/routes";

Notification.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
        priority: 1,
    }),
});

export default function WelcomeScreen({ navigation }) {
    //* this hook handle double click for exit app
    useDoubleClickExit();

    return (
        <ImageBackground
            blurRadius={3}
            source={require("../../assets/bg1.jpg")}
            style={styles.imageBackground}>
            <StatusBar translucent backgroundColor="transparent" />

            <View style={styles.topContainer}>
                <Image source={require("../../assets/logo.png")} style={styles.logoImage} />
                <BoldText style={styles.textHeader} fontSize={2}>
                    خودآموزی ، کسب تجربه ، ورود به بازار کار با تاپ لرن
                </BoldText>
            </View>
            <View style={styles.bottomContainer}>
                <CustomOpacityButton
                    title="ورود"
                    onPress={() => {
                        navigation.navigate(routes.AUTH.LOGIN_SCREEN);
                    }}
                    width={"100%"}
                />
                <CustomOpacityButton
                    title="ثبت نام"
                    onPress={() => {
                        navigation.navigate(routes.AUTH.REGISTER_SCREEN);
                        notificationHandler();
                    }}
                    width={"100%"}
                    color={globalStyles.COLORS.MAGENTA_PURPLE}
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
            sticky: false,
            color: globalStyles.COLORS.PRIMARY,
            launchImageName: require("../../assets/logo.png"),
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
