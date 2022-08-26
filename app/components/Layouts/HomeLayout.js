import { StyleSheet, View, StatusBar } from "react-native";

import COLORS from "../../styles/colors.json";
import HeaderText from "../CustomTexts/HeaderText";

const HomeLayout = ({ children, title = "", HeaderComponent = <></> }) => {
    return (
        <View>
            <View style={styles.header}>
                <HeaderText>{title}</HeaderText>
                {HeaderComponent}
            </View>
            <View style={styles.main}>{children}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: COLORS.PRIMARY_COLOR,
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 10,
        elevation: 8,
    },
    main: {
        justifyContent: "center",
        alignItems: "center",
    },
});

export default HomeLayout;
