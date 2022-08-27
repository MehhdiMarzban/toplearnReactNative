import { View, StyleSheet } from "react-native";

const CardSeperator = () => {
    return <View style={styles.seperator} />
}

const styles = StyleSheet.create({
    seperator: {
        width: 1,
        height: "100%",
        marginHorizontal: 2
    }
});

export default CardSeperator;