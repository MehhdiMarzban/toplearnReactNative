import { NavigationContainer } from "@react-navigation/native";
import StacksNavigator from "./StacksNavigator";

const ToplearnNavigation = () => {
    return (
        <>
            <NavigationContainer>
                <StacksNavigator />
            </NavigationContainer>
        </>
    );
};
export default ToplearnNavigation;
