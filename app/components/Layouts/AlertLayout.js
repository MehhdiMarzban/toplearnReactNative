import { Modal, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import BoldText from "../CustomTexts/BoldText";
import Divider from "../shared/Divider";
import COLORS from "../../styles/colors.json";
import TabBarButton from "../CustomButtons/TabBarButton";

const AlertLayout = ({
    title = "",
    children,
    handlePressOutsideAlert = () => null,
    isVisible = false,
}) => {
    return (
        <Modal
            visible={isVisible}
            animationType="fade"
            hardwareAccelerated
            transparent
            statusBarTranslucent>
            <TouchableWithoutFeedback onPress={handlePressOutsideAlert}>
                <View style={styles.modal}>
                    <TouchableWithoutFeedback>
                        <View style={styles.container}>
                            <BoldText style={styles.headerText} fontSize={2}>
                                {title}
                            </BoldText>
                            <TabBarButton
                                style={styles.closeButton}
                                onPress={handlePressOutsideAlert}>
                                <MaterialCommunityIcons
                                    name="close"
                                    size={30}
                                    color={COLORS.LIGHT_BACKGROUND_COLOR}
                                />
                            </TabBarButton>
                            <Divider style={styles.divider} />
                            {children}
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        backgroundColor: COLORS.MODAL_BACKGROUND,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        width: "90%",
        backgroundColor: COLORS.WHITE_COLOR,
        borderRadius: 10,
        padding: 10,
    },
    headerText: {
        textAlign: "center",
    },
    divider: {
        marginVertical: 5,
    },
    closeButton: {
        position: "absolute",
        top: 2,
        left: 2,
    },
});

export default AlertLayout;
