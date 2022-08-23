import { StyleSheet, Text, View, ImageBackground, Image, StatusBar } from "react-native";
import CustomButton from "../components/CustomButtons/CustomButton";

export default function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground
            blurRadius={3}
            source={require("../assets/bg1.jpg")}
            style={styles.imageBackground}>
            <StatusBar translucent backgroundColor="transparent" />

            <View style={styles.topContainer}>
                <Image source={require("../assets/logo.png")} style={styles.logoImage} />
                <Text style={styles.textHeader}>
                    خودآموزی ، کسب تجربه ، ورود به بازار کار با تاپ لرن
                </Text>
            </View>
            <View style={styles.bottomContainer}>
                <CustomButton
                    title="ورود"
                    onPress={() => {
                        navigation.navigate("LoginScreen");
                    }}
                    width={"100%"}
                />
                <CustomButton title="ثبت نام" onPress={() => {navigation.navigate("RegisterScreen")}} width={"100%"} color="#6D214F" />
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
        height: 80,
    },
    textHeader: {
        fontFamily: "vazir-bold",
        color: "#82589F",
        fontSize: 15,
        marginVertical: 40,
        textAlign: "center",
    },
});
