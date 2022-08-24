import AppInitializer from "./app/components/AppInitializer/AppInitializer";
import { ToplearnNavigation } from "./app/routes";

export default function App() {
    return (
        <AppInitializer>
           <ToplearnNavigation />
        </AppInitializer>
    );
}
