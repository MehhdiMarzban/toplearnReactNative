import { Pressable, StyleSheet } from "react-native";

import BoldText from "../Texts/BoldText";
import COLORS from "../../styles/colors.json";

const CustomPressableButton = ({
    title = "",
    color = COLORS.CYAN_COLOR,
    textButtonStyle = {},
    pressableStyle = {},
    ...otherProps
}) => {
    return (
        <>
            <Pressable
                {...otherProps}
                style={[styles.pressable, pressableStyle, { backgroundColor: color }]}
                android_ripple={{ foreground: true, color: COLORS.RIPPLE_COLOR }}>
                <BoldText style={[styles.pressableText, textButtonStyle]} fontSize={1.7}>
                    {title}
                </BoldText>
            </Pressable>
        </>
    );
};

const styles = StyleSheet.create({
    pressable: {
        padding: 10,
        width: "100%",
        borderRadius: 8,
    },
    pressableText: {
        color: COLORS.WHITE_COLOR,
        textAlign: "center",
    },
});

export default CustomPressableButton;
