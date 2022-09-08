import { View, StyleSheet } from "react-native";

const VerticalCardSeparator = () => {
    return <View style={styles.seperator} />;
};

const styles = StyleSheet.create({
    seperator: {
        width: "100%",
        height: 1,
        marginVertical: 5,
    },
});

export default VerticalCardSeparator;
