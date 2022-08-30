import { View, StyleSheet } from "react-native";

import BoldText from "../../components/CustomTexts/BoldText";
import RegularText from "../../components/CustomTexts/RegularText";
import COLORS from "../../styles/colors.json";

const Toast = (props) => {
    return (
        <View style={[styles.customToastContaienr, {backgroundColor: props.props.bg ? props.props.bg : COLORS.CYAN_COLOR}]}>
            <BoldText fontSize={2} style={styles.customToastText}>
                {props?.text1}
            </BoldText>
            <RegularText fontSize={1.4} style={styles.customToastText}>
                {props?.text2}
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
