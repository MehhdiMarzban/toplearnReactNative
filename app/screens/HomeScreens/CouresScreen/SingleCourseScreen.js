import { useEffect } from "react";
import { Image, StyleSheet, View, Dimensions, ScrollView } from "react-native";

import CustomPressableButton from "../../../components/CustomButtons/CustomPressableButton";
import COLORS from "../../../styles/colors.json";
import DownloadList from "../../../components/Course/SingleCourse/DownloadList";
import HeaderDetails from "../../../components/Course/SingleCourse/HeaderDetails";
import Main from "../../../components/Course/SingleCourse/Main";

const SingleCourseScreen = ({ navigation, route }) => {
    const data = route.params;
    useEffect(() => {
        navigation.setOptions({ headerShown: true, title: data.title });
    }, []);
    return (
        <>
            <View style={styles.container}>
                <Main data={data}/>
                <CustomPressableButton title="افزودن به سبد خرید" pressableStyle={styles.button} />
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
