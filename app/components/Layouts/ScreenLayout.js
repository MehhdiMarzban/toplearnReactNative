import { View } from "react-native";

import globalStyles from "../../styles/globalStyles";

const ScreenLayout = ({ children }) => {
    return <View style={globalStyles.screen}>{children}</View>;
};
export default ScreenLayout;
