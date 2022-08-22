import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
const CustomButton = ({onPress = () => null, title = "", color = "royalblue", width= "100%"}) => {
    return (
        <TouchableOpacity style={{width: "100%"}} onPress={onPress} activeOpacity={0.6}>
            <View style={[styles.buttonContainer, {backgroundColor: color, width: width}]}>
                <Text style={styles.buttonText}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "royalblue",
        borderRadius: 8,
        padding: 15,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 5
    },
    buttonText: {
        color: "white",
        fontFamily: "vazir",
        textAlign: "center",
        width: "100%",
    }
});

export default CustomButton;