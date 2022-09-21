import { FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import CourseListContainer from "../../../components/Course/CourseListContainer/CourseListContainer";

import HorizontalCourseList from "../../../components/Course/CourseLists/HorizontalCourseList";
import HomeLayout from "../../../components/Layouts/HomeLayout";
import ImageCarousel from "../../../components/shared/ImageCarousel";
import { useRelativeSize } from "../../../hooks/useRelativeSize";

const CoursesScreen = ({ navigation }) => {
    const courses = useSelector((state) => state.courses);
    const [width, height] = useRelativeSize();

    return (
        <HomeLayout title="دوره ها">
            <FlatList
                ListHeaderComponent={
                    <CourseListContainer
                        childrenContainerStyle={styles.headerCourseContainer}
                        disableExpand
                        title="پر بازدید ترین مطالب تاپلرن">
                        <ImageCarousel width={width} height={height} />
                    </CourseListContainer>
                }
                ListHeaderComponentStyle={styles.headerSlider}
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

const styles = StyleSheet.create({
    headerSlider: {
        justifyContent: "center",
        alignItems: "center",
    },
    headerCourseContainer: {
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default CoursesScreen;
