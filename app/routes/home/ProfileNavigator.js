import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ProfileScreen } from "../../screens";
import routes from "../configs/routes";

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={routes.HOME.PROFILE_SCREEN}>
            <Stack.Screen name={routes.HOME.PROFILE_SCREEN} component={ProfileScreen} />
        </Stack.Navigator>
    );
};

export default ProfileNavigator;
