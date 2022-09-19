import { useNavigation } from "@react-navigation/native";
import routes from "../routes/configs/routes";

export const useToplearnNavigation = () => {
    const navigation = useNavigation();

    const handleCourseClick = (data) => {
        navigation.navigate(routes.HOME.SINGLE_COURSE_SCREEN, data);
    };

    return { handleCourseClick };
};
