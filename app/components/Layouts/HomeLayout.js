import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import constants from "expo-constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import COLORS from "../../styles/colors.json";
import HeaderText from "../CustomTexts/HeaderText";
import TabBarButton from "../CustomButtons/TabBarButton";
import Badge from "../shared/Badge";

const HomeLayout = ({
    children,
    title = false,
    badgeNumber = 2,
    HeaderComponent = <></>,
    style,
}) => {
    return (
        <>
            <View style={[styles.container, style]}>
                {title ? (
                    <View style={styles.header}>
                        <View style={styles.basketButton}>
                            <TabBarButton>
                                <MaterialCommunityIcons
                                    name="cart"
                                    size={30}
                                    color={COLORS.WHITE_COLOR}
                                />
                                <Badge style={styles.basketBadge}>{badgeNumber}</Badge>
                            </TabBarButton>
                        </View>
                        <HeaderText fontSize={2.3}>{title}</HeaderText>
                        {HeaderComponent}
                    </View>
                ) : null}
                <View style={styles.main}>{children}</View>
            </View>
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
    basketButton: {
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        right: 5,
        padding: 10,
    },
    basketBadge: {
        position: "absolute",
        top: -8,
        left: -8,
        paddingHorizontal: 6
    },
});

export default HomeLayout;
