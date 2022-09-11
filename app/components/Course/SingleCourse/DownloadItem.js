import { TouchableOpacity, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import BoldText from "../../Texts/BoldText";
import RegularText from "../../Texts/RegularText";
import COLORS from "../../../styles/colors.json";

const DownloadItem = ({ data: { item } }) => {
    return (
        <TouchableOpacity activeOpacity={0.6} style={styles.touchable}>
            <View style={styles.itemDownload}>
                <View style={styles.downloadTextContainer}>
                    <BoldText style={styles.downloadNumber} fontSize={2}>
                        {item.id}
                    </BoldText>
                    <RegularText style={styles.downloadTitle} fontSize={1.8}>
                        {item.title}
                    </RegularText>
                </View>
                <MaterialCommunityIcons
                    name={item.own ? "download" : "download-lock"}
                    color={COLORS.WHITE_COLOR}
                    size={30}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    itemDownload: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: COLORS.WHITE_COLOR,
        borderRadius: 10,
        marginHorizontal: 10,
        marginBottom: 5,
        backgroundColor: COLORS.CYAN_COLOR,
    },
    touchable: {
        width: "100%"
    },
    downloadTextContainer: {
        flexDirection: "row",
    },
    downloadNumber: {
        color: COLORS.WHITE_COLOR,
        marginRight: 10,
        backgroundColor: COLORS.PRIMARY_COLOR,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    downloadTitle: {
        color: COLORS.WHITE_COLOR,
    },
});

export default DownloadItem;
