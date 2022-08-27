import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import { ProfileScreen, CoursesScreen, MyCoursesScreen } from "../screens";
import TabBarButton from "../components/CustomButtons/TabBarButton";
import COLORS from "../styles/colors.json";

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
    return (
        <Tab.Navigator
            backBehavior="none"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarLabelStyle: {
                    fontFamily: "vazir-bold",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 5,
                },
                tabBarActiveTintColor: COLORS.PRIMARY_COLOR,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === "ProfileScreen") {
                        iconName = focused ? "person" : "person-outline";
                    } else if (route.name === "CoursesScreen") {
                        iconName = "video-collection";
                    } else {
                        iconName = focused ? "ondemand-video" : "personal-video";
                    }
                    return (
                        <MaterialIcons
                            name={iconName}
                            color={color}
                            size={focused ? size + 5 : size}
                        />
                    );
                },
                tabBarButton: (props) => <TabBarButton {...props} />,
            })}
            initialRouteName="CoursesScreen">
            <Tab.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    title: "پروفایل",
                }}
            />
            <Tab.Screen
                name="CoursesScreen"
                component={CoursesScreen}
                options={{
                    title: "دوره ها",
                }}
            />
            <Tab.Screen
                name="MyCoursesScreen"
                component={MyCoursesScreen}
                options={{
                    title: "دوره های من",
                }}
            />
        </Tab.Navigator>
    );
};

export default TabsNavigator;
