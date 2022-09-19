import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SingleCourseScreen } from "../../screens";
import TabNavigator from "./TabNavigator";
import routes from "../configs/routes";
import options from "../configs/options";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={routes.HOME.TAB_NAVIGATOR}
            screenOptions={options.HOME_NAVIGATOR_OPTIONS}>
            <Stack.Screen name={routes.HOME.TAB_NAVIGATOR} component={TabNavigator} />
            <Stack.Screen name={routes.HOME.SINGLE_COURSE_SCREEN} component={SingleCourseScreen} />
        </Stack.Navigator>
    );
};

export default HomeNavigator;

//* this option can be use here but i used them in SingleCourseScreen
// options={({ navigation, route }) => ({
//     headerShow: true,
//     title: route.params.title,
// })}
