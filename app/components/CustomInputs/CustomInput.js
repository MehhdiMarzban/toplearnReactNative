import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const CustomInput = ({
    placeHolder = "",
    value = "",
    onChangeText = () => null,
    autoComplete = "off",
    keyboardType = "default",
    iconName = "access-point",
    secureTextEntry = false
}) => {
    return (
        <View style={styles.inputContainer}>
            <MaterialCommunityIcons name={iconName} size={30} color="#57606f"/>
            <TextInput
                style={styles.input}
                value={value}
                placeholder={placeHolder}
                onChangeText={onChangeText}
                autoComplete={autoComplete}
                autoCorrect={false}
                keyboardType={keyboardType}
                placeholderTextColor="#fff"
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        width: "80%",
        borderRadius: 8,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        padding: 15,
        marginVertical: 10,
        textAlign: "center",
        borderBottomWidth: 2,
        borderBottomColor: "#706fd3",
        backgroundColor: "#2c2c54",
        fontFamily: "vazir",
        fontSize: 15,
        color: "#fff"
    },
});

export default CustomInput;
