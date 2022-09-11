import { StyleSheet } from "react-native";

import RegularText from "../Texts/RegularText";
import CustomPressableButton from "../Buttons/CustomPressableButton";
import AlertLayout from "../Layouts/AlertLayout";
import { useToplearnContext } from "../../hooks/useToplearnContext";
import { useNetworkConnection } from "../../hooks/useNetworkConnection";

const NetAlert = () => {
    const { handleExit } = useToplearnContext();
    const isConnected = useNetworkConnection();
    
    return (
        <>
            <AlertLayout title="توجه" isVisible={!isConnected} showCloseButton={false}>
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
