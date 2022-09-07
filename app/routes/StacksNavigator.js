import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoginScreen, RegisterScreen, SingleCourseScreen, WelcomeScreen } from "../screens";
import TabsNavigator from "./TabsNavigator";
import COLORS from "../styles/colors.json";

const Stack = createNativeStackNavigator();

const StacksNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerTitleAlign: "center",
                animationTypeForReplace:"push",
                animation: "default",
                headerStyle: { backgroundColor: COLORS.PRIMARY_COLOR },
                headerTitleStyle: { color: COLORS.WHITE_COLOR, fontFamily: "vazir-bold" },
                headerTintColor: COLORS.WHITE_COLOR
            }}>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="HomeScreen" component={TabsNavigator} />
            <Stack.Screen name="SingleCourseScreen" component={SingleCourseScreen} />
        </Stack.Navigator>
    );
};

export default StacksNavigator;
