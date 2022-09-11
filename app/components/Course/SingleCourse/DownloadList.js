import { View, StyleSheet, FlatList } from "react-native";

import BoldText from "../../Texts/BoldText";
import DownloadItem from "./DownloadItem";
import COLORS from "../../../styles/colors.json";

const DownloadList = ({ data }) => {
    //* when not exist any file dont show anything
    if (!data || !data.length === 0) {
        return null;
    }

    return (
        <View style={styles.downloadContainer}>
            <BoldText style={styles.downloadHeader} fontSize={2}>
                لیست دانلود
            </BoldText>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={(item) => <DownloadItem data={item} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    downloadContainer: {
        backgroundColor: COLORS.LIGHT_GREY_COLOR,
        width: "95%",
        borderRadius: 10,
        marginBottom: 50,
        paddingVertical: 10,
    },

    downloadHeader: {
        color: COLORS.GREY_COLOR,
        textAlign: "center",
        marginBottom: 5,
    },
});

export default DownloadList;
