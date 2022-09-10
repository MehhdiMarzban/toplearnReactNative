import { useNavigation } from "@react-navigation/native";

export const useToplearnNavigation = () => {
    const navigation = useNavigation();

    const handleCourseClick = (data) => {
        navigation.navigate("SingleCourseScreen", data);
    };

    return { handleCourseClick };
};
