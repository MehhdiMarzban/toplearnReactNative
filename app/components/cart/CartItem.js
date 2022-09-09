import { View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import COLORS from "../../styles/colors.json";
import RegularText from "../CustomTexts/RegularText";
import TabBarButton from "../CustomButtons/TabBarButton";
import { numberWithCommas } from "../../utils/price";

const CartItem = () => {
    return (
        <View style={styles.cartItemContainer}>
            <View style={styles.insideCartItemContainer}>
                <Image
                    style={styles.cartItemImage}
                    source={require("../../assets/courses/NodeJs.jpg")}
                />
                <RegularText fontSize={1.7}>دوره جامع نود جی اس</RegularText>
            </View>
            <View style={styles.insideCartItemContainer}>
                <RegularText style={styles.priceText} fontSize={1.7}>
                    {numberWithCommas(300000)}
                </RegularText>
                <TabBarButton>
                    <MaterialCommunityIcons name="delete" size={24} color={COLORS.GREY_COLOR} />
                </TabBarButton>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cartItemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: COLORS.VERY_LIGHT_COLOR,
        padding: 5,
        borderRadius: 6,
    },
    cartItemImage: {
        width: 35,
        height: 25,
        marginRight: 5,
    },
    insideCartItemContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    priceText: {
        color: COLORS.TITLE_COLOR,
    },
});

export default CartItem;
