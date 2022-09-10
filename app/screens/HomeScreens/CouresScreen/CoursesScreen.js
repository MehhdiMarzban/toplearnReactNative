import { FlatList } from "react-native";
import {  useSelector } from "react-redux";

import HorizontalCourseList from "../../../components/Course/CourseLists/HorizontalCourseList";
import HomeLayout from "../../../components/Layouts/HomeLayout";

const CoursesScreen = ({ navigation }) => {
    const courses = useSelector((state) => state.courses);

    return (
        <HomeLayout title="دوره ها">
            <FlatList
                data={courses}
                renderItem={({ item }) => (
                    <HorizontalCourseList
                        courses={item.courses}
                        listTitle={item.listTitle}
                    />
                )}
            />
        </HomeLayout>
    );
};

export default CoursesScreen;
