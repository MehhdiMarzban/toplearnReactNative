import { StyleSheet, BackHandler } from "react-native";

import RegularText from "../CustomTexts/RegularText";
import CustomPressableButton from "../CustomButtons/CustomPressableButton";
import AlertLayout from "../Layouts/AlertLayout";

const NetAlert = () => {
    const handleExit = () => {
        BackHandler.exitApp();
    };
    return (
        <>
            <AlertLayout title="توجه">
                <RegularText style={styles.bodyText} fontSize={1.5}>
                    شما برای استفاده از این برنامه نیازمند اینترنت هستید!
                </RegularText>
                <CustomPressableButton
                    onPress={handleExit}
                    pressableStyle={styles.buttonStyle}
                    title="خروج"
                />
            </AlertLayout>
        </>
    );
};

const styles = StyleSheet.create({
    bodyText: {
        textAlign: "center",
    },
    buttonStyle: {
        marginTop: 10,
    },
});
export default NetAlert;
