import { Text, TouchableWithoutFeedback } from "react-native";
import globalStyles from "../../styles/globalStyles";
import * as Animatable from "react-native-animatable";

const BareButton = ({ children, ...otherProps }) => {
    return (
        <Animatable.View animation={"bounceIn"} >
            <TouchableWithoutFeedback
                {...otherProps}>
                <Text style={[globalStyles.linkText, { marginVertical: 10 }]}>{children}</Text>
            </TouchableWithoutFeedback>
        </Animatable.View>
    );
};

export default BareButton;
