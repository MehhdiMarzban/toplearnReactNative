import { StyleSheet, FlatList } from "react-native";

import Card from "../../shared/Card";
import VerticalCardSeparator from "../../shared/VerticalCardSeparator";

const VerticalCourseList = ({ data = [] }) => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={VerticalCardSeparator}
            contentContainerStyle={styles.container}
            renderItem={({ item }) => <Card item={item} fullWidth />}
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
