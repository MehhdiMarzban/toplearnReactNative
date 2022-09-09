import { FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Toast from "react-native-toast-message";

import { updateCartAction } from "../../../redux/actions";
import HorizontalCourseList from "../../../components/Course/CourseLists/HorizontalCourseList";
import HomeLayout from "../../../components/Layouts/HomeLayout";

const CoursesScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const courses = useSelector((state) => state.courses);

    const handleAddToCart = async (course) => {
        await dispatch(updateCartAction(course));
        Toast.show({
            text2: `${course.title} به سبد خرید شما افزوده شد!`,
            type: "info",
            position: "bottom",
        });
    };

    const handleCourseClick = (data) => {
        navigation.navigate("SingleCourseScreen", data);
    };

    return (
        <HomeLayout title="دوره ها">
            <FlatList
                data={courses}
                renderItem={({ item }) => (
                    <HorizontalCourseList
                        courses={item.courses}
                        listTitle={item.listTitle}
                        handleCourseClick={handleCourseClick}
                        handleAddToCart={handleAddToCart}
                    />
                )}
            />
        </HomeLayout>
    );
};

export default CoursesScreen;
