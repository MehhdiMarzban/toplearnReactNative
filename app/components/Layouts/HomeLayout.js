import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import constants from "expo-constants";

import globalStyles from "../../styles/globalStyles";
import HeaderText from "../Texts/HeaderText";
import CartButton from "../Cart/CartButton";
import { useToplearnContext } from "../../hooks/useToplearnContext";

const HomeLayout = ({ children, title = false, HeaderComponent = <></>, style = {} }) => {
    const { handleShowCart } = useToplearnContext();

    return (
        <>
            <View style={[styles.container, style]}>
                {title ? (
                    <View style={styles.header}>
                        {/* cart button */}
                        <CartButton handleOnPress={handleShowCart} />
                        <HeaderText fontSize={2.3}>{title}</HeaderText>
                        {HeaderComponent}
                    </View>
                ) : null}
                <View style={styles.main}>{children}</View>
            </View>
            <StatusBar style="light" backgroundColor={globalStyles.COLORS.PRIMARY} />
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        marginTop: constants.statusBarHeight,
        backgroundColor: globalStyles.COLORS.PRIMARY,
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
    container: {
        flex: 1,
        height: "100%",
        paddingBottom: 70,
    },
});

export default HomeLayout;
