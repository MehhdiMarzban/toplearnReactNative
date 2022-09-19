import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CoursesScreen } from "../../screens";
import routes from "../configs/routes";

const Stack = createNativeStackNavigator();

const CoursesNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={routes.HOME.COURSES_SCREEN}
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name={routes.HOME.COURSES_SCREEN} component={CoursesScreen} />
        </Stack.Navigator>
    );
};

export default CoursesNavigator;
