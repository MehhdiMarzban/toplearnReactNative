import { FlatList } from "react-native";
import { useSelector } from "react-redux";

import CourseList from "../../components/Course/CourseList";
import HomeLayout from "../../components/Layouts/HomeLayout";

const CoursesScreen = ({ navigation }) => {
    const courses = useSelector((state) => state.courses);

    const handleCourseClick = (data) => {
        navigation.navigate("SingleCourseScreen", data);
    };

    return (
        <HomeLayout title="دوره ها">
            <FlatList
                data={courses}
                renderItem={({ item }) => (
                    <CourseList
                        courses={item.courses}
                        listTitle={item.listTitle}
                        handleCourseClick={handleCourseClick}
                    />
                )}
            />
        </HomeLayout>
    );
};

export default CoursesScreen;
