import { View, StyleSheet } from "react-native";

import AlertLayout from "../Layouts/AlertLayout";
import CustomPressableButton from "../CustomButtons/CustomPressableButton";
import COLORS from "../../styles/colors.json";
import BoldText from "../CustomTexts/BoldText";

const CartAlert = ({ handleDismissCart, data = [1] }) => {
    return (
        <AlertLayout title="سبد خرید">
            {data.length === 0 ? (
                <BoldText style={styles.headerText} fontSize={1.7}>
                    لیست خرید شما خالی است!
                </BoldText>
            ) : (
                <View>
                    <BoldText style={styles.headerText} fontSize={1.7}>
                        لیست خرید شما
                    </BoldText>
                    <CustomPressableButton pressableStyle={styles.buttonMargin} title="پرداخت" />
                </View>
            )}
            <CustomPressableButton
                pressableStyle={styles.buttonMargin}
                color={COLORS.RED_COLOR}
                onPress={handleDismissCart}
                title="بستن"
            />
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
});

export default CartAlert;
