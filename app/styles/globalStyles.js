import { StyleSheet, StatusBar } from "react-native";
import COLORS from "./colors.json";

const globalStyles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    center: {
        justifyContent: "center",
        alignItems: "center",
    },
    regularText: {
        fontFamily: "vazir",
    },
    headerText: {
        fontFamily: "vazir-bold",
        color: COLORS.WHITE_COLOR,
        fontSize: 20
    },
    boldText: {
        fontFamily: "vazir-bold",
    },
    linkText: {
        fontFamily: "vazir-bold",
        color: COLORS.PRIMARY_COLOR,
    },
    shadow: {
        
        elevation: 8,
    },
    logo: {
        width: 75,
        height: 55
    },
    profile: {
        width: 75,
        height: 75,
        borderRadius: 50
    },
    marginVertical: {
        marginVertical: 10
    }
});

export default globalStyles;
