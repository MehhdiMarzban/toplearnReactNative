import { StyleSheet } from "react-native";

import RegularText from "../Texts/RegularText";
import globalStyles from "../../styles/globalStyles";

const ErrorText = ({ children, touched }) => {
    return (
        <RegularText fontSize={1.6} style={styles.errorText}>
            {touched ? children : " "}
        </RegularText>
    );
};

const styles = StyleSheet.create({
    errorText: {
        color: globalStyles.COLORS.RED,
    },
});

export default ErrorText;
