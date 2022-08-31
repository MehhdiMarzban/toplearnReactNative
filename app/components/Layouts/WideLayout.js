import { StatusBar } from "expo-status-bar";
import { Image, Keyboard, TouchableWithoutFeedback, StyleSheet, View } from "react-native";
import globalStyles from "../../styles/globalStyles";
import BoldText from "../CustomTexts/BoldText";

const WideLayout = ({ children = <></>, title = "" }) => {
    return (
        <>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={[globalStyles.container, styles.container]}>
                    <View style={[styles.header, globalStyles.shadow]}>
                        <BoldText style={styles.textHeader} fontSize={3.3}>
                            {title}
                        </BoldText>
                        <Image
                            source={require("../../assets/logo.png")}
                            style={globalStyles.logo}
                        />
                    </View>
                    {children}
                </View>
            </TouchableWithoutFeedback>
            <StatusBar style="light" backgroundColor="#1B1464" />
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#1B1464",
        width: "100%",
        height: 185,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    textHeader: {
        color: "#FFFFFF",
        marginVertical: 30,
    },
    container: {
        justifyContent: "space-between",
        backgroundColor: "#fff",
        flex: 1,
    },
});

export default WideLayout;
