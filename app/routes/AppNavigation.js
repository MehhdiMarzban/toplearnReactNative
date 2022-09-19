import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeNavigator from "./home/HomeNavigator";
import AuthNavigator from "./auth/AuthNavigator";
import routes from "./configs/routes";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName={routes.APP.AUTH_NAVIGATOR}
                    screenOptions={{ headerShown: false }}>
                    <Stack.Screen name={routes.APP.AUTH_NAVIGATOR} component={AuthNavigator} />
                    <Stack.Screen name={routes.APP.HOME_NAVIGATOR} component={HomeNavigator} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
};
export default AppNavigation;
