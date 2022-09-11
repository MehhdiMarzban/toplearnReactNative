import { TouchableWithoutFeedback } from "react-native";
import * as Animatable from "react-native-animatable";

import globalStyles from "../../styles/globalStyles";
import BoldText from "../Texts/BoldText";

const BareButton = ({ children, fontSize = 1.5, ...otherProps }) => {
    return (
        <Animatable.View animation={"bounceIn"} style={otherProps?.style}>
            <TouchableWithoutFeedback {...otherProps}>
                <BoldText style={globalStyles.linkText} fontSize={fontSize}>
                    {children}
                </BoldText>
            </TouchableWithoutFeedback>
        </Animatable.View>
    );
};

export default BareButton;
