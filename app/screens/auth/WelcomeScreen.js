import { StyleSheet, View, ImageBackground, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import constants from "expo-constants";

import useDoubleClickExit from "../../hooks/useDoubleClickExit";
import useLocalNotification from "../../hooks/useLocalNotification";
import CustomOpacityButton from "../../components/Buttons/CustomOpacityButton";
import BoldText from "../../components/Texts/BoldText";
import globalStyles from "../../styles/globalStyles";
import routes from "../../routes/configs/routes";

export default function WelcomeScreen({ navigation }) {
    //* this hook handle double click for exit app
    useDoubleClickExit();
    
    //* give a instance of local notification and first argument is notification listener
    const notification = useLocalNotification((e) => console.log(e));

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
                    onPress={async () => {
                        navigation.navigate(routes.AUTH.REGISTER_SCREEN);
                        notification({
                            title: "خوش آمدید!",
                            body: "به آموزشگاه تاپلرن خوش آمدید، امیدواریم بتوانیم در ادامه مسیر یاری دهنده خوبی برای شما باشیم!",
                            data: { myData: "http://mehdi-marzban.ir" },
                        });
                    }}
                    width={"100%"}
                    color={globalStyles.COLORS.MAGENTA_PURPLE}
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
