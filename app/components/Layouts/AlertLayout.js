import { Modal, StyleSheet, View } from "react-native";

import BoldText from "../CustomTexts/BoldText";
import Divider from "../shared/Divider";
import COLORS from "../../styles/colors.json";

const AlertLayout = ({ title = "", children }) => {
    return (
        <Modal animationType="fade"  hardwareAccelerated transparent statusBarTranslucent>
            <View style={styles.modal}>
                <View style={styles.container}>
                    <BoldText style={styles.headerText} fontSize={2}>
                        {title}
                    </BoldText>
                    <Divider style={styles.divider} />
                    {children}
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        backgroundColor: "#00000090",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        width: "80%",
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
});

export default AlertLayout;
