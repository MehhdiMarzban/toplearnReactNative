import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoginScreen, RegisterScreen, WelcomeScreen } from "../../screens";
import routes from "../configs/routes";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={routes.AUTH.WELCOME_SCREEN}>
            <Stack.Screen name={routes.AUTH.WELCOME_SCREEN} component={WelcomeScreen} />
            <Stack.Screen name={routes.AUTH.LOGIN_SCREEN} component={LoginScreen} />
            <Stack.Screen name={routes.AUTH.REGISTER_SCREEN} component={RegisterScreen} />
        </Stack.Navigator>
    );
};

export default AuthNavigator;
