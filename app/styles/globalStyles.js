import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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
    },
    shadow: {
        
        elevation: 8,
    },
    logo: {
        width: 75,
        height: 55
    }
});

export default globalStyles;
