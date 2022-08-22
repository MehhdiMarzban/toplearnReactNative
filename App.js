import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppInitializer from "./app/components/AppInitializer/AppInitializer";
import LoginScreen from "./app/screens/LoginScreen";

import WelcomeScreen from "./app/screens/WelcomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <AppInitializer>
            <NavigationContainer >
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
                    <Stack.Screen name="LoginScreen" component={LoginScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </AppInitializer>
    );
}
