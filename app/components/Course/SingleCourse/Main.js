import { FlatList, StyleSheet } from "react-native";

import BottomDetails from "./BottomDetails";
import DownloadList from "./DownloadList";
import HeaderDetails from "./HeaderDetails";

const Main = ({ data }) => {
    return (
        <>
            <FlatList
                contentContainerStyle={styles.flatListContainerContent}
                data={[]}
                ListHeaderComponent={<HeaderDetails data={data} />}
                ListFooterComponent={<DownloadList data={data.downloadFile} />}
            />
            {/* this bottom details have absolute position and doesn't matter where be called */}
            <BottomDetails data={data} />
        </>
    );
};

const styles = StyleSheet.create({
    flatListContainerContent: { alignItems: "center", paddingTop: 20, paddingBottom: 110 },
});

export default Main;
