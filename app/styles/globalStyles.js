import Constants from "expo-constants";

import COLORS from "./colors";

const globalStyles = {
    container: {
        marginTop: Constants.statusBarHeight,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    screen: {
        marginTop: Constants.statusBarHeight,
        flex: 1,
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
        color: COLORS.WHITE,
    },
    boldText: {
        fontFamily: "vazir-bold",
    },
    linkText: {
        fontFamily: "vazir-bold",
        color: COLORS.PRIMARY,
    },
    shadow: {
        elevation: 8,
    },
    logo: {
        width: 75,
        height: 55,
    },
    profile: {
        width: 75,
        height: 75,
        borderRadius: 50,
    },
    marginVertical: {
        marginVertical: 10,
    },
    COLORS,
};

// globalStyles.COLORS = COLORS;

export default globalStyles;
