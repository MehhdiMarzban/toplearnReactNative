import { StyleSheet, View, Text, Vibration } from "react-native";
import { useRef } from "react";
import * as Animatable from "react-native-animatable";
import Ripple from "react-native-material-ripple";

const CustomButton = ({ onPress = () => null, title = "", color = "royalblue", style = {} }) => {
    const buttonRef = useRef(null);

    return (
        <Animatable.View
            animation="fadeIn"
            duration={1000}
            ref={buttonRef}
            style={[styles.fullWidth, { marginVertical: 5 }, style]}>
            <Ripple
                style={[
                    styles.fullWidth,
                    styles.buttonContainer,
                    { backgroundColor: color },
                    style,
                ]}
                onPress={() => {
                    buttonRef.current.rubberBand(1000);
                    //* using vibration
                    Vibration.vibrate(25);
                    onPress();
                }}>
                <Text style={styles.buttonText}>{title}</Text>
            </Ripple>
        </Animatable.View>
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
    },
    buttonText: {
        color: "white",
        fontFamily: "vazir-bold",
        textAlign: "center",
        width: "100%",
    },
});

export default CustomButton;
