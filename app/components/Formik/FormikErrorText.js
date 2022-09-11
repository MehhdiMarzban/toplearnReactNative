import { StyleSheet } from "react-native";

import RegularText from "../Texts/RegularText";
import COLORS from "../../styles/colors.json";

const ErrorText = ({ children, touched }) => {
    return (
        <RegularText fontSize={1.6} style={styles.errorText}>
            {touched ? children : " "}
        </RegularText>
    );
};

const styles = StyleSheet.create({
    errorText: {
        color: COLORS.RED_COLOR,
    },
});

export default ErrorText;
