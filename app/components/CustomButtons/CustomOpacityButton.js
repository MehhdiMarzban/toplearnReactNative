import { StyleSheet, Text, TouchableOpacity, Vibration } from "react-native";

const CustomOpacityButton = ({
    onPress = () => null,
    title = "",
    color = "royalblue",
    style = {},
}) => {
    return (
        <TouchableOpacity
            style={[styles.fullWidth, styles.buttonContainer, { backgroundColor: color }, style]}
            onPress={() => {
                //* using vibration
                Vibration.vibrate(25);
                onPress();
            }}
            activeOpacity={0.7}>
            <Text style={styles.buttonText}>{title}</Text>
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
