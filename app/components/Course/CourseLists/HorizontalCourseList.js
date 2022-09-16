import { FlatList, StyleSheet } from "react-native";

import Card from "../../Shared/Card";
import HorizontalCardSeparator from "../../Shared/HorizontalCardSeparator";
import { useToplearnNavigation } from "../../../hooks/useTopLearnNavigation";
import { useToplearnContext } from "../../../hooks/useToplearnContext";

const HorizontalCourseList = ({ data = [] }) => {
    const { handleAddToCart } = useToplearnContext();
    const { handleCourseClick } = useToplearnNavigation();

    return (
        <FlatList
            showsHorizontalScrollIndicator={false}
            data={data}
            horizontal
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.flatlistContainer}
            ItemSeparatorComponent={HorizontalCardSeparator}
            renderItem={({ item }) => (
                <Card
                    handleAddToCart={() => handleAddToCart(item)}
                    handleCourseClick={() => handleCourseClick(item)}
                    item={item}
                />
            )}
        />
    );
};

const styles = StyleSheet.create({
    flatlistContainer: { paddingVertical: 30, paddingHorizontal: 10 },
});
export default HorizontalCourseList;
