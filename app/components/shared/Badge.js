import { View, Text, StyleSheet } from "react-native";

import globalStyles from "../../styles/globalStyles";

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
        backgroundColor: globalStyles.COLORS.RED,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    badgeText: {
        color: globalStyles.COLORS.WHITE,
        fontSize: 10,
        fontFamily: "vazir-bold",
    },
});
export default Badge;
