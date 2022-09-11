import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { calculatePercent, numberWithCommas } from "../../utils/price";
import RegularText from "../Texts/RegularText";
import BoldText from "../Texts/BoldText";
import COLORS from "../../styles/colors.json";

const Price = ({ price, offPercent = 0 }) => {
    return (
        <View style={styles.rightPriceContainer}>
            <MaterialCommunityIcons
                name="cash-register"
                size={25}
                color={COLORS.LIGHT_GREY_COLOR}
            />
            {price == 0 ? (
                <BoldText style={styles.teacherText} fontSize={1.6}>
                    رایگان
                </BoldText>
            ) : (
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                    }}>
                    <RegularText style={styles.realPrice} fontSize={1.3}>
                        {numberWithCommas(price)} تومان
                    </RegularText>
                    {offPercent != 0 && (
                        <RegularText style={styles.offPrice} fontSize={1.5}>
                            {numberWithCommas(calculatePercent(price, offPercent))} تومان
                        </RegularText>
                    )}
                </View>
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    offPrice: {
        color: COLORS.GREY_COLOR,
        marginLeft: 4,
    },
    realPrice: {
        textDecorationLine: "line-through",
        textDecorationColor: COLORS.RED_COLOR,
        textDecorationStyle: "solid",
        color: COLORS.GREY_COLOR,
    },
    rightPriceContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
});

export default Price;
