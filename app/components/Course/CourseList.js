import { FlatList, StyleSheet, View } from "react-native";
import BoldText from "../CustomTexts/BoldText";

import Card from "../shared/Card";
import COLORS from "../../styles/colors.json";

const CourseList = ({courses = [], listTitle = ""}) => {
    return (
        <View style={styles.flatList}>
            <BoldText style={styles.groupTitle}>{listTitle}</BoldText>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={courses}
                horizontal
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        price={item.price}
                        teacher={item.teacher}
                        imageUrl={item.image}
                        offPercent={item.offPercent}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    flatList: {
        heigth: 450,
        width: "100%",
        marginVertical: 10,
        backgroundColor: COLORS.WHITE_COLOR,
    },
    groupTitle: {
        textAlign: "center",
        color: COLORS.GREY_COLOR,
        marginTop: 10,
        fontSize: 20,
    },
});
export default CourseList;
