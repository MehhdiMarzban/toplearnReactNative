import { FlatList } from "react-native";

import BottomDetails from "./BottomDetails";
import DownloadList from "./DownloadList";
import HeaderDetails from "./HeaderDetails";

const Main = ({ data }) => {
    return (
        <>
            <FlatList
                ListFooterComponentStyle={{ alignItems: "center" }}
                data={[]}
                ListHeaderComponent={<HeaderDetails data={data} />}
                ListFooterComponent={<DownloadList data={data.downloadFile} />}
            />
            <BottomDetails data={data} />
        </>
    );
};

export default Main;
