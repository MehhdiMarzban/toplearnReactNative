import { useEffect } from "react";
import { StyleSheet, View } from "react-native";

import globalStyles from "../../../styles/globalStyles";
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
        backgroundColor: globalStyles.COLORS.WHITE,
        width: "100%",
    },
});
export default SingleCourseScreen;
