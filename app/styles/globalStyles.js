import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    regularText: {
        fontFamily: "vazir",
    },
    boldText: {
        fontFamily: "vazir-bold",
    },
    linkText: {
        fontFamily: "vazir-bold",
        color: "#1B1464",
    }
});

export default globalStyles;