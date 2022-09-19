import { MaterialIcons } from "@expo/vector-icons";

import TabBarButton from "../../components/Buttons/TabBarButton";
import globalStyles from "../../styles/globalStyles";
import routes from "./routes";

export default {
    HOME_NAVIGATOR_OPTIONS: {
        headerShown: false,
        headerTitleAlign: "center",
        animationTypeForReplace: "push",
        animation: "default",
        headerStyle: { backgroundColor: globalStyles.COLORS.PRIMARY },
        headerTitleStyle: {
            color: globalStyles.COLORS.WHITE,
            fontFamily: "vazir-bold",
        },
        headerTintColor: globalStyles.COLORS.WHITE,
    },

    TAB_BAR_NAVIGATOR_OPTIONS: ({ route }) => ({
        headerShown: false,
        tabBarLabelStyle: {
            fontFamily: "vazir-bold",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 5,
        },
        tabBarActiveTintColor: globalStyles.COLORS.PRIMARY,
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === routes.HOME.PROFILE_NAVIGATOR) {
                iconName = focused ? "person" : "person-outline";
            } else if (route.name === routes.HOME.COURSES_NAVIGATOR) {
                iconName = "video-collection";
            } else {
                iconName = focused ? "ondemand-video" : "personal-video";
            }
            return <MaterialIcons name={iconName} color={color} size={focused ? size + 5 : size} />;
        },
        tabBarButton: (props) => <TabBarButton {...props} />,
    }),

    TAB_BAR_NAVIGATOR_TITILES: {
        COURESE: "دوره ها",
        MY_COURSES: "دوره های من",
        PROFILE: "پروفایل",
    },
};
