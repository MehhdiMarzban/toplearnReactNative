import { useSelector } from "react-redux";

import VerticalCourseList from "../../../components/Course/CourseLists/VerticalCourseList";
import HomeLayout from "../../../components/Layouts/HomeLayout";

const MyCoursesScreen = ({ navigation }) => {
    const ownCourses = useSelector((state) => state.ownCourses);
    return (
        <>
            <HomeLayout title="دوره های من">
                <VerticalCourseList data={ownCourses} />
            </HomeLayout>
        </>
    );
};

export default MyCoursesScreen;
