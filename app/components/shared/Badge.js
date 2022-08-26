import { View, Text, StyleSheet } from "react-native";

import COLORS from "../../styles/colors.json";

const Badge = ({ children, style, ...otherProps }) => {
    return (
        <>
            <View {...otherProps} style={[styles.badgeContainer, style]}>
                <Text style={styles.badgeText}>{children}</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    badgeContainer: {
        paddingVertical: 4,
        paddingHorizontal: 10,
        backgroundColor: COLORS.RED_COLOR,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    badgeText: {
        color: COLORS.WHITE_COLOR,
        fontSize: 10,
        fontFamily: "vazir-bold"
    },
});
export default Badge;
