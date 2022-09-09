import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import constants from "expo-constants";
import { useState } from "react";
import { useDispatch } from "react-redux";

import COLORS from "../../styles/colors.json";
import HeaderText from "../CustomTexts/HeaderText";
import CartAlert from "../cart/CartAlert";
import CartButton from "../cart/CartButton";
import { useToplearnContext } from "../../hooks/useToplearnContext";

const HomeLayout = ({ children, title = false, HeaderComponent = <></>, style }) => {

    const {showCart, handleShowCart} = useToplearnContext();

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
            {/* showing cart */}
            {showCart && <CartAlert />}
            <StatusBar style="light" backgroundColor={COLORS.PRIMARY_COLOR} />
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        marginTop: constants.statusBarHeight,
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
    container: {
        flex: 1,
        marginBottom: 60,
    },
});

export default HomeLayout;
