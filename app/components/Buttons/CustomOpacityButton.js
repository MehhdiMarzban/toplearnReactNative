import { StyleSheet, TouchableOpacity, Vibration } from "react-native";

import BoldText from "../Texts/BoldText";

const CustomOpacityButton = ({
    onPress = () => null,
    title = "",
    color = "royalblue",
    style = {},
    ...otherProps
}) => {
    return (
        <TouchableOpacity
            {...otherProps}
            style={[styles.fullWidth, styles.buttonContainer, { backgroundColor: color }, style]}
            onPress={() => {
                //* using vibration
                Vibration.vibrate(25);
                onPress();
            }}
            activeOpacity={0.7}>
            <BoldText style={styles.buttonText} fontSize={1.8}>
                {title}
            </BoldText>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    fullWidth: {
        width: "100%",
    },
    buttonContainer: {
        backgroundColor: "royalblue",
        borderRadius: 8,
        padding: 15,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
    },
    buttonText: {
        color: "white",
        fontFamily: "vazir-bold",
        textAlign: "center",
        width: "100%",
    },
});

export default CustomOpacityButton;
