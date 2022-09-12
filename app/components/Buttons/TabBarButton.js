import { useRef } from "react";
import * as Animatable from "react-native-animatable";
import { Pressable } from "react-native";

import globalStyles from "../../styles/globalStyles";

const TabBarButton = ({ onPress = () => null, children, ...otherProps }) => {
    const btnRef = useRef();
    const handleOnPress = () => {
        btnRef.current.rubberBand(1000);
        onPress();
    };
    return (
        <Pressable
            android_ripple={{ color: globalStyles.COLORS.LIGHT_GREY }}
            onPress={handleOnPress}
            {...otherProps}>
            <Animatable.View ref={btnRef}>{children}</Animatable.View>
        </Pressable>
    );
};

export default TabBarButton;
