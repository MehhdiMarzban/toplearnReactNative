import { FlatList, StyleSheet, View } from "react-native";
import BoldText from "../CustomTexts/BoldText";

import Card from "../shared/Card";
import COLORS from "../../styles/colors.json";
import CardSeperator from "../shared/CardSeperator";
import Divider from "../shared/Divider";

const CourseList = ({ courses = [], listTitle = "" }) => {
    return (
        <View style={styles.flatListContainer}>
            <BoldText style={styles.groupTitle} fontSize={2.2}>{listTitle}</BoldText>
            <Divider style={styles.headerDivider}/>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={courses}
                horizontal
                keyExtractor={(item) => item.id.toString()}
                // ListHeaderComponent={<Card />}
                // ListHeaderComponentStyle={{marginLeft: 20}}
                contentContainerStyle={{ paddingVertical: 30, paddingHorizontal: 10 }}
                ItemSeparatorComponent={CardSeperator}
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
    flatListContainer: {
        heigth: 450,
        width: "100%",
        marginVertical: 10,
        backgroundColor: COLORS.WHITE_COLOR,
    },
    groupTitle: {
        color: COLORS.GREY_COLOR,
        marginVertical: 10,
        marginLeft: 20
    },
    headerDivider: {
        height: 4,
        width: "50%",
    }
});
export default CourseList;
