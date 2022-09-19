import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ProfileNavigator from "./ProfileNavigator";
import MyCoursesNavigator from "./MyCoursesNavigator";
import CoursesNavigator from "./CoursesNavigator";
import routes from "../configs/routes";
import options from "../configs/options";

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName={routes.HOME.COURSES_NAVIGATOR}
            backBehavior="none"
            screenOptions={options.TAB_BAR_NAVIGATOR_OPTIONS}>
            <Tab.Screen
                name={routes.HOME.PROFILE_NAVIGATOR}
                component={ProfileNavigator}
                options={{
                    title: options.TAB_BAR_NAVIGATOR_TITILES.PROFILE,
                }}
            />
            <Tab.Screen
                name={routes.HOME.COURSES_NAVIGATOR}
                component={CoursesNavigator}
                options={{
                    title: options.TAB_BAR_NAVIGATOR_TITILES.COURESE,
                }}
            />
            <Tab.Screen
                name={routes.HOME.MY_COURSES_NAVIGATOR}
                component={MyCoursesNavigator}
                options={{
                    title: options.TAB_BAR_NAVIGATOR_TITILES.MY_COURSES,
                }}
            />
        </Tab.Navigator>
    );
};

export default HomeTabNavigator;
