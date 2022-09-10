import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import AlertLayout from "../Layouts/AlertLayout";
import CustomPressableButton from "../CustomButtons/CustomPressableButton";
import COLORS from "../../styles/colors.json";
import BoldText from "../CustomTexts/BoldText";
import Divider from "../shared/Divider";
import { numberWithCommas, calculateSum } from "../../utils/price";
import { useToplearnContext } from "../../hooks/useToplearnContext";
import CartItemsList from "./CartItemsList";

const CartAlert = () => {
    const cartData = useSelector((state) => state.cart);
    const { handleDeleteCart, handleDismissCart } = useToplearnContext();
    
    return (
        <AlertLayout title="سبد خرید" handlePressOutsideAlert={handleDismissCart}>
            {cartData.length === 0 ? (
                <BoldText style={styles.headerText} fontSize={1.7}>
                    لیست خرید شما خالی است!
                </BoldText>
            ) : (
                <View>
                    {/* TODO add cartList */}
                    <CartItemsList />
                    <Divider style={{ marginVertical: 6, height: 4 }} />
                    <BoldText fontSize={1.8} style={styles.cartSumPrice}>
                        جمع کل صورت حساب : {numberWithCommas(calculateSum(cartData))} تومان
                    </BoldText>

                    {/* TODO add cartList */}
                    <CustomPressableButton pressableStyle={styles.buttonMargin} title="پرداخت" />
                    <CustomPressableButton
                        pressableStyle={styles.buttonMargin}
                        color={COLORS.RED_COLOR}
                        onPress={() => {
                            handleDeleteCart();
                            handleDismissCart();
                        }}
                        title="حذف سفارش"
                    />
                </View>
            )}
        </AlertLayout>
    );
};

const styles = StyleSheet.create({
    buttonMargin: {
        marginVertical: 4,
    },
    headerText: {
        textAlign: "center",
        color: COLORS.TITLE_COLOR,
    },
    cartSumPrice: {
        color: COLORS.TITLE_COLOR,
        textAlign: "center",
    },
});

export default CartAlert;
