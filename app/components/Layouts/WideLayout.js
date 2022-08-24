import { StatusBar } from "expo-status-bar";
import { Image, Keyboard, Text, TouchableWithoutFeedback, StyleSheet, View } from "react-native";
import globalStyles from "../../styles/globalStyles";

const WideLayout = ({ children = <></>, title = "" }) => {
    return (
        <>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={[globalStyles.container, styles.container]}>
                    <StatusBar style="light" backgroundColor="#1B1464" />
                    <View style={[styles.header, globalStyles.shadow]}>
                        <Text style={styles.textHeader}>{title}</Text>
                        <Image
                            source={require("../../assets/logo.png")}
                            style={globalStyles.logo}
                        />
                    </View>
                    {children}
                </View>
            </TouchableWithoutFeedback>
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#1B1464",
        width: "100%",
        height: 200,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    textHeader: {
        color: "#FFFFFF",
        fontFamily: "vazir-bold",
        fontSize: 25,
        marginVertical: 30,
    },
    container: {
        justifyContent: "space-between",
        backgroundColor: "#fff",
    },
});

export default WideLayout;
