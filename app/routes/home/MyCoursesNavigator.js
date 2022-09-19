import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { MyCoursesScreen } from "../../screens";
import routes from "../configs/routes";

const Stack = createNativeStackNavigator();

const MyCoursesNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={routes.HOME.MY_COURESES_SCREEN}
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name={routes.HOME.MY_COURESES_SCREEN} component={MyCoursesScreen} />
        </Stack.Navigator>
    );
};

export default MyCoursesNavigator;
