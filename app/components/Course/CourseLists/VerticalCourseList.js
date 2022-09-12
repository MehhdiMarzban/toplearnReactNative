import { StyleSheet, FlatList } from "react-native";

import { useToplearnContext } from "../../../hooks/useToplearnContext";
import { useToplearnNavigation } from "../../../hooks/useTopLearnNavigation";
import Card from "../../shared/Card";
import VerticalCardSeparator from "../../shared/VerticalCardSeparator";

const VerticalCourseList = ({ data = [] }) => {
    const { handleAddToCart } = useToplearnContext();
    const { handleCourseClick } = useToplearnNavigation();

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={VerticalCardSeparator}
            contentContainerStyle={styles.container}
            renderItem={({ item }) => (
                <Card
                    handleAddToCart={() => handleAddToCart(item)}
                    handleCourseClick={() => handleCourseClick(item)}
                    item={item}
                    fullWidth
                />
            )}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        paddingHorizontal: 8,
        paddingBottom: 60,
    },
});

export default VerticalCourseList;
