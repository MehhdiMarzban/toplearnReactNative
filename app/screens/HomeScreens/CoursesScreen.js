import CourseList from "../../components/Course/CourseList";
import HomeLayout from "../../components/Layouts/HomeLayout";


const courses = [
    {
        id: 1,
        title: "دوره جامع NodeJs",
        price: "300000",
        time: "15:00:00",
        teacher: "یونس قربانی",
        image: require("../../assets/courses/NodeJs.jpg"),
        offPercent: 10,
    },
    {
        id: 2,
        title: "دوره جامع ReactJs",
        price: "200000",
        time: "15:00:00",
        teacher: "یونس قربانی",
        image: require("../../assets/courses/ReactJs.jpg"),
        offPercent: 50,
    },
    {
        id: 3,
        title: "دوره جامع ElectronJs",
        price: "200000",
        time: "15:00:00",
        teacher: "یونس قربانی",
        image: require("../../assets/courses/Electron.jpg"),
        offPercent: 40,
    },
    {
        id: 4,
        title: "دوره جامع React Native",
        price: "200000",
        teacher: "یونس قربانی",
        time: "15:00:00",
        image: require("../../assets/courses/ReactNative.jpg"),
        offPercent: 30,
    },
];

const CoursesScreen = () => {
    return (
        <>
            <HomeLayout title="دوره ها">
                    <CourseList listTitle="آخرین دوره ها" courses={courses}/>
            </HomeLayout>
        </>
    );
};



export default CoursesScreen;
