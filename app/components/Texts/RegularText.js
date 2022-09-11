import { Text } from "react-native";
import {RFPercentage} from "react-native-responsive-fontsize";

import globalStyles from "../../styles/globalStyles";

const RegularText = ({children,style, fontSize =1,...otherProps}) => {
    return <Text style={[globalStyles.regularText, style, {fontSize: RFPercentage(fontSize)}]} {...otherProps}>{children}</Text>
}



export default RegularText;