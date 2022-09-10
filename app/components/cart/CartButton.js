import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import COLORS from "../../styles/colors.json";
import TabBarButton from "../CustomButtons/TabBarButton";
import Badge from "../shared/Badge";

const CartButton = ({ handleOnPress = () => null }) => {
    const cartData = useSelector((state) => state.cart);

    return (
        <TabBarButton style={styles.basketButton} onPress={handleOnPress}>
            <MaterialCommunityIcons name="cart" size={30} color={COLORS.WHITE_COLOR} />
            <Badge style={styles.basketBadge}>{cartData.length}</Badge>
        </TabBarButton>
    );
};

const styles = StyleSheet.create({
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
        paddingHorizontal: 6,
    },
});

export default CartButton;
