import { FlatList, View } from "react-native";
import DownloadList from "./DownloadList";
import HeaderDetails from "./HeaderDetails";
const Main = ({ data }) => {
    return (
        <FlatList
            ListFooterComponentStyle={{alignItems: "center"}}
            data={[]}
            ListHeaderComponent={<HeaderDetails data={data} />}
            ListFooterComponent={<DownloadList data={data.downloadFile} />}
        />
    );
};

export default Main;
