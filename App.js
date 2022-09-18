import AppInitializer from "./app/components/AppInitializer/AppInitializer";
import { AppNavigator } from "./app/routes";

export default function App() {
    return (
        <AppInitializer>
            <AppNavigator />
        </AppInitializer>
    );
}
