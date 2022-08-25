import { Text } from "react-native";
import globalStyles from "../../styles/globalStyles";

const RegularText = ({children,style, ...otherProps}) => {
    return <Text style={[globalStyles.regularText, style]} {...otherProps}>{children}</Text>
}



export default RegularText;