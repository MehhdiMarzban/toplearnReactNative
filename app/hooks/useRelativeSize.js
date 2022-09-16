import { useWindowDimensions } from "react-native";

export const useRelativeSize = () => {
    const { width } = useWindowDimensions();
    const relativeWidth = width - 20;
    const relativeHeight = width * (35 / 50);

    return [relativeWidth, relativeHeight];
};
