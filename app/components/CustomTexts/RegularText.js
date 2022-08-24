import { Text } from "react-native";
import globalStyles from "../../styles/globalStyles";

const RegularText = ({children}) => {
    return <Text style={globalStyles.regularText}>{children}</Text>
}



export default RegularText;