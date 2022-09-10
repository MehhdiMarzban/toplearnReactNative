import { useEffect } from "react";
import { StyleSheet, View } from "react-native";

import CustomPressableButton from "../../../components/CustomButtons/CustomPressableButton";
import COLORS from "../../../styles/colors.json";
import Main from "../../../components/Course/SingleCourse/Main";
import { useToplearnContext } from "../../../hooks/useToplearnContext";

const SingleCourseScreen = ({ navigation, route }) => {
    const data = route.params;
    const { handleAddToCart } = useToplearnContext();

    useEffect(() => {
        navigation.setOptions({ headerShown: true, title: data.title });
    }, []);
    return (
        <>
            <View style={styles.container}>
                <Main data={data} />
                <CustomPressableButton
                    title="افزودن به سبد خرید"
                    pressableStyle={styles.button}
                    onPress={() => handleAddToCart(data)}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingVertical: 10,
        backgroundColor: COLORS.WHITE_COLOR,
        width: "100%",
    },

    button: {
        position: "absolute",
        width: "90%",
        bottom: 10,
    },
});
export default SingleCourseScreen;
