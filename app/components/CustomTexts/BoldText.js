import { Text } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

import globalStyles from "../../styles/globalStyles";

const BoldText = ({ children, style, fontSize =1, ...otherProps }) => {
    return (
        <Text
            // using RFPercentage to make responsive font
            style={[globalStyles.boldText, style, { fontSize: RFPercentage(fontSize) }]}
            {...otherProps}>
            {children}
        </Text>
    );
};

export default BoldText;
