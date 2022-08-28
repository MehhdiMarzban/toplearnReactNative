import { Pressable, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import COLORS from "../../styles/colors.json";
import RegularText from "../CustomTexts/RegularText";

const IconButton = ({
    icon = "account",
    iconSize = 30,
    iconColor = COLORS.LIGHT_GREY_COLOR,
    btnTitle = "",
    style ={},
    ...otherProps
}) => {
    return (
        <Pressable
            {...otherProps}
            renderToHardwareTextureAndroid
            android_ripple={{ color: COLORS.LIGHT_GREY_COLOR,  foreground: true}}
            style={[ styles.ripple,style]}
            >
            <View style={styles.container}>
                <MaterialCommunityIcons name={icon} size={iconSize} color={iconColor} />
                <RegularText style={styles.text} fontSize={2}>
                    {btnTitle}
                </RegularText>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    ripple: {
        width: "100%",
    },
    text: {
        marginLeft: 5,
        width: "100%",
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        padding: 15,
        backgroundColor: COLORS.WHITE_COLOR,
        height: 60,
    },
});

export default IconButton;
