import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {RFPercentage} from "react-native-responsive-fontsize";

import globalStyles from "../../styles/globalStyles";

const CustomInput = ({
    placeHolder = "",
    value = "",
    onChangeText = () => null,
    autoComplete = "off",
    keyboardType = "default",
    iconName = "access-point",
    secureTextEntry = false,
    ...otherProps
}) => {
    return (
        <View style={[styles.inputContainer,  globalStyles.shadow]}>
            <MaterialCommunityIcons name={iconName} size={30} color="#fff"/>
            <TextInput
                style={[styles.input]}
                value={value}
                placeholder={placeHolder}
                onChangeText={onChangeText}
                autoComplete={autoComplete}
                autoCorrect={false}
                keyboardType={keyboardType}
                placeholderTextColor="#fff"
                secureTextEntry={secureTextEntry}
                {...otherProps}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2c2c54",
        marginVertical: 10,
        padding: 15,
        borderRadius: 8,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomWidth: 2,
        borderBottomColor: "#706fd3",
    },
    input: {
        width: "80%",
        textAlign: "center",
        backgroundColor: "#2c2c54",
        fontFamily: "vazir",
        fontSize: RFPercentage(1.8),
        color: "#fff"
    },
});

export default CustomInput;
