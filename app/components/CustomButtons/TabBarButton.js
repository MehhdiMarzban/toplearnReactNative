import { useRef } from "react";
import { TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

const TabBarButton = ({ onPress, children, ...otherProps }) => {
    const btnRef = useRef();
    const handleOnPress = () => {
        btnRef.current.rubberBand(1000);
        onPress();
    };
    return (
        <TouchableOpacity onPress={handleOnPress} {...otherProps}>
            <Animatable.View ref={btnRef}>{children}</Animatable.View>
        </TouchableOpacity>
    );
};

export default TabBarButton;
