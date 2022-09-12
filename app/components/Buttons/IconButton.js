import { Pressable, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import globalStyles from "../../styles/globalStyles";
import RegularText from "../Texts/RegularText";

const IconButton = ({
    icon = "account",
    iconSize = 30,
    iconColor = globalStyles.COLORS.MEDIUM,
    btnTitle = "",
    style = {},
    ...otherProps
}) => {
    return (
        <Pressable
            {...otherProps}
            renderToHardwareTextureAndroid
            android_ripple={{ color: globalStyles.COLORS.LIGHT_GREY, foreground: true }}
            style={[styles.ripple, style]}>
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
        backgroundColor: globalStyles.COLORS.WHITE,
        height: 60,
    },
});

export default IconButton;
