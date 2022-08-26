import { useRef } from "react";
import * as Animatable from "react-native-animatable";
import Ripple from "react-native-material-ripple";

const TabBarButton = ({ onPress = () => {}, children, ...otherProps }) => {
    const btnRef = useRef();
    const handleOnPress = () => {
        btnRef.current.rubberBand(1000);
        onPress();
    };
    return (
        <Ripple onPress={handleOnPress} {...otherProps}>
            <Animatable.View ref={btnRef}>{children}</Animatable.View>
        </Ripple>
    );
};

export default TabBarButton;
