import { View, StyleSheet } from "react-native";

const Divider = ({ style, ...otherProps }) => {
    return <View {...otherProps} style={[styles.divider, style]} />;
};

const styles = StyleSheet.create({
    divider: {
        width: "100%",
        height: 1,
        backgroundColor: "lightgrey",
        borderRadius: 10,
    },
});

export default Divider;
