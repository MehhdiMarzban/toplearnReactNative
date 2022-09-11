import { useEffect } from "react";
import { StyleSheet, View } from "react-native";

import COLORS from "../../../styles/colors.json";
import Main from "../../../components/Course/SingleCourse/Main";

const SingleCourseScreen = ({ navigation, route }) => {
    const data = route.params;
    useEffect(() => {
        navigation.setOptions({ headerShown: true, title: data.title });
    }, []);
    return (
        <>
            <View style={styles.container}>
                <Main data={data} />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: COLORS.WHITE_COLOR,
        width: "100%",
    },
});
export default SingleCourseScreen;
