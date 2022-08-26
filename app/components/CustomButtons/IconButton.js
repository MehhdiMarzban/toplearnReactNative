import { Text, View, StyleSheet } from "react-native";
import Ripple from "react-native-material-ripple";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import COLORS from "../../styles/colors.json";

const IconButton = ({
    icon = "account",
    iconSize = 30,
    iconColor = COLORS.LIGHT_GREY_COLOR,
    btnTitle = "",
    style,
    ...otherProps
}) => {
    return (
        <Ripple {...otherProps} style={[styles.ripple, style]}>
            <View style={styles.container}>
                <MaterialCommunityIcons name={icon} size={iconSize} color={iconColor} />
                <Text style={styles.text}>{btnTitle}</Text>
            </View>
        </Ripple>
    );
};

const styles = StyleSheet.create({
    ripple: { padding: 15, backgroundColor: COLORS.WHITE_COLOR, width: "100%", height: 60, justifyContent: "center" },
    text: {
        fontFamily: "vazir",
        fontSize: 15,
        marginLeft: 5,
    },
    container: { flexDirection: "row", alignItems: "center" },
});

export default IconButton;
