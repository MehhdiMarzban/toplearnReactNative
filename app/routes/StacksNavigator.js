import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoginScreen, RegisterScreen, SingleCourseScreen, WelcomeScreen } from "../screens";
import TabsNavigator from "./TabsNavigator";
import globalStyles from "../styles/globalStyles";

const Stack = createNativeStackNavigator();

const StacksNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
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
            }}>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="HomeScreen" component={TabsNavigator} />
            <Stack.Screen
                name="SingleCourseScreen"
                //* this option can be use here but i used them in SingleCourseScreen
                // options={({ navigation, route }) => ({
                //     headerShow: true,
                //     title: route.params.title,
                // })}
                component={SingleCourseScreen}
            />
        </Stack.Navigator>
    );
};

export default StacksNavigator;
