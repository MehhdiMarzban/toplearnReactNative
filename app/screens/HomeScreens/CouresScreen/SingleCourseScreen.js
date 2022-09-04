import { useEffect } from "react";
import { Image } from "react-native";
import HomeLayout from "../../../components/Layouts/HomeLayout";

const SingleCourseScreen = ({ navigation, route }) => {
    useEffect(() => {
        navigation.setOptions({ headerShown: true, title: route.params.title });
    }, []);
    return (
        <HomeLayout>
            <Image source={route.params.image} />
        </HomeLayout>
    );
};

export default SingleCourseScreen;
