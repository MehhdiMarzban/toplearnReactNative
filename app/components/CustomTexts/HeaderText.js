import { Text } from "react-native";
import {RFPercentage} from "react-native-responsive-fontsize";

import globalStyles from "../../styles/globalStyles";

const HeaderText = ({children,style, fontSize =1 ,...otherProps}) => {
    return <Text style={[globalStyles.headerText, style, {fontSize: RFPercentage(fontSize)}]} {...otherProps}>{children}</Text>
}



export default HeaderText;