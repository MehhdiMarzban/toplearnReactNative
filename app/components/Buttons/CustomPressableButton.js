import { Pressable, StyleSheet } from "react-native";

import BoldText from "../Texts/BoldText";
import globalStyles from "../../styles/globalStyles";

const CustomPressableButton = ({
    title = "",
    color = globalStyles.COLORS.CYAN,
    textButtonStyle = {},
    pressableStyle = {},
    ...otherProps
}) => {
    return (
        <>
            <Pressable
                {...otherProps}
                style={[styles.pressable, pressableStyle, { backgroundColor: color }]}
                android_ripple={{ foreground: true, color: globalStyles.COLORS.LIGHT }}>
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
        color: globalStyles.COLORS.WHITE,
        textAlign: "center",
    },
});

export default CustomPressableButton;
