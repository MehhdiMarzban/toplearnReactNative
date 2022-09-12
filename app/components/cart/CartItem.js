import { View, StyleSheet, Image, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import globalStyles from "../../styles/globalStyles";
import RegularText from "../Texts/RegularText";
import TabBarButton from "../Buttons/TabBarButton";
import { numberWithCommas } from "../../utils/price";

const CartItem = ({
    title = "",
    image = require("../../assets/courses/Electron.jpg"),
    price = "0",
    handleDeleteOneItemCart = () => null,
}) => {
    return (
        //* TODO fix work without TouchableWithoutFeedback
        <TouchableWithoutFeedback>
            <View style={styles.cartItemContainer}>
                <View style={styles.insideCartItemContainer}>
                    <Image style={styles.cartItemImage} source={image} resizeMethod="resize" />
                    <RegularText fontSize={1.7}>{title}</RegularText>
                </View>
                <View style={styles.insideCartItemContainer}>
                    <RegularText style={styles.priceText} fontSize={1.7}>
                        {numberWithCommas(price)}
                    </RegularText>
                    <TabBarButton onPress={handleDeleteOneItemCart}>
                        <MaterialCommunityIcons
                            name="delete"
                            size={24}
                            color={globalStyles.COLORS.GREY}
                        />
                    </TabBarButton>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    cartItemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: globalStyles.COLORS.LIGHT,
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
        color: globalStyles.COLORS.TITLE,
    },
});

export default CartItem;
