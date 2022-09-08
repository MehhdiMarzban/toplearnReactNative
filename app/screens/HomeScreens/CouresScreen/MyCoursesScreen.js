
import { useSelector } from "react-redux";

import VerticalCourseList from "../../../components/Course/VerticalCourseList";
import HomeLayout from "../../../components/Layouts/HomeLayout";


const MyCoursesScreen = ({navigation}) => {
    const ownCourses = useSelector(state => state.ownCourses);
    
    const handleCourseClick = (data) => {
        navigation.navigate("SingleCourseScreen", data);
    }

    return (
        <>
            <HomeLayout title="دوره های من">
                <VerticalCourseList data={ownCourses} handleCourseClick={handleCourseClick} />
            </HomeLayout>
        </>
    );
};

export default MyCoursesScreen;
