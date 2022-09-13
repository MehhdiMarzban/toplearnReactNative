import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import CourseListContainer from "../../../components/Course/CourseListContainer/CourseListContainer";

import HorizontalCourseList from "../../../components/Course/CourseLists/HorizontalCourseList";
import HomeLayout from "../../../components/Layouts/HomeLayout";

const CoursesScreen = ({ navigation }) => {
    const courses = useSelector((state) => state.courses);

    return (
        <HomeLayout title="دوره ها">
            <FlatList
                data={courses}
                renderItem={({ item }) => (
                    <CourseListContainer title={item.listTitle}>
                        <HorizontalCourseList data={item.courses} />
                    </CourseListContainer>
                )}
            />
        </HomeLayout>
    );
};

export default CoursesScreen;
