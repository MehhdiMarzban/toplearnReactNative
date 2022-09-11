import { View, StyleSheet } from "react-native";

import BoldText from "../Texts/BoldText";
import RegularText from "../Texts/RegularText";
import COLORS from "../../styles/colors.json";

const Toast = ({ props, text1, text2 }) => {
    return (
        <View
            style={[
                styles.customToastContaienr,
                { backgroundColor: props.bg ? props.bg : COLORS.CYAN_COLOR },
            ]}>
            <BoldText fontSize={2} style={styles.customToastText}>
                {text1}
            </BoldText>
            <RegularText fontSize={1.4} style={styles.customToastText}>
                {text2}
            </RegularText>
        </View>
    );
};

const styles = StyleSheet.create({
    customToastText: {
        color: COLORS.WHITE_COLOR,
        textAlign: "center",
        width: "100%",
    },
    customToastContaienr: {
        width: "70%",
        height: 70,
        padding: 5,
        elevation: 8,
        borderRadius: 8,
    },
});

export default Toast;
