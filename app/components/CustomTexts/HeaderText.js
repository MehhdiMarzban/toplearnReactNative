import { Text } from "react-native";
import globalStyles from "../../styles/globalStyles";

const HeaderText = ({children,style, ...otherProps}) => {
    return <Text style={[globalStyles.headerText, style]} {...otherProps}>{children}</Text>
}



export default HeaderText;