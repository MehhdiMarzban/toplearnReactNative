import { Text, TouchableWithoutFeedback} from "react-native";
import globalStyles from "../../styles/globalStyles";

const BareButton = ({ children, ...otherProps }) => {
    return (
        <TouchableWithoutFeedback {...otherProps}>
            <Text style={[globalStyles.linkText, { marginVertical: 10 }]}>{children}</Text>
        </TouchableWithoutFeedback>
    );
};

export default BareButton;
