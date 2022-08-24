import { View } from "react-native";

import globalStyles from "../../styles/globalStyles";

const SimpleLayout = ({ children }) => {
    return <View style={globalStyles.container}>{children}</View>;
};
export default SimpleLayout;
