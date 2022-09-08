const ownCourses = [
    {
        id: 1,
        title: "دوره جامع NodeJsدوره جامع NodeJsدوره جامع NodeJsدوره جامع NodeJs",
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
        downloadFile: [
            { title: "معرفی ریکت نیتیو", url: "http://mehdi-marzban.ir", id: 1, own: false },
            {
                title: "تفاوت ریکت نیتیو با ریکت جی اس",
                url: "http://mehdi-marzban.ir",
                id: 2,
                own: true,
            },
            { title: "بررسی کامپوننت Text", url: "http://mehdi-marzban.ir", id: 3, own: true },
            { title: "بررسی کامپوننت View", url: "http://mehdi-marzban.ir", id: 4, own: true },
            {
                title: "استایل دهی کردن در ریکت نیتیو",
                url: "http://mehdi-marzban.ir",
                id: 5,
                own: true,
            },
            {
                title: "بررسی کامپوننت ScrollView",
                url: "http://mehdi-marzban.ir",
                id: 6,
                own: true,
            },
            { title: "بررسی کامپوننت FlatList", url: "http://mehdi-marzban.ir", id: 7, own: true },
            {
                title: "بررسی کتاب خانه NativeBase",
                url: "http://mehdi-marzban.ir",
                id: 8,
                own: true,
            },
            {
                title: "آموزش ReactNativeNavigation",
                url: "http://mehdi-marzban.ir",
                id: 9,
                own: true,
            },
            {
                title: "بررسی هوک useFocusEffect",
                url: "http://mehdi-marzban.ir",
                id: 10,
                own: true,
            },
            {
                title: "نحوه چپ به راست کردن متون",
                url: "http://mehdi-marzban.ir",
                id: 11,
                own: true,
            },
        ],
    },
];

export const intiOwnCoursesAction = () => {
    return async (dispatch, getState) => {
        dispatch({ type: "INIT_OWN_COURSES", payload: ownCourses });
    };
};

export const addOwnCourseAction = (newCourse) => {
    return async (dispatch, getState) => {
        dispatch({ type: "ADD_OWN_COURSES", payload: newCourse });
    };
};
