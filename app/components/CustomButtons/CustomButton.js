import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useRef } from "react";
import * as Animatable from "react-native-animatable";

const CustomButton = ({
    onPress = () => null,
    title = "",
    color = "royalblue",
    width = "100%",
}) => {
    const buttonRef = useRef(null);

    return (
        <Animatable.View
            style={{ width: "100%" }}
            animation="fadeIn"
            duration={1000}
            ref={buttonRef}>
            <TouchableOpacity
                style={{ width: "100%" }}
                onPress={() => {
                    buttonRef.current.rubberBand(1000);
                    console.log();
                    onPress();
                }}
                activeOpacity={0.6}>
                <View style={[styles.buttonContainer, { backgroundColor: color, width: width }]}>
                    <Text style={styles.buttonText}>{title}</Text>
                </View>
            </TouchableOpacity>
        </Animatable.View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "royalblue",
        borderRadius: 8,
        padding: 15,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 5,
    },
    buttonText: {
        color: "white",
        fontFamily: "vazir",
        textAlign: "center",
        width: "100%",
    },
});

export default CustomButton;
