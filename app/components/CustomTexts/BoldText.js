import { Text } from "react-native";
import globalStyles from "../../styles/globalStyles";

const BoldText = ({children,style, ...otherProps}) => {
    return <Text style={[globalStyles.boldText, style]} {...otherProps}>{children}</Text>
}



export default BoldText;