import { FlatList, StyleSheet, View } from "react-native";
import BoldText from "../CustomTexts/BoldText";
import { MaterialIcons } from "@expo/vector-icons";

import Card from "../shared/Card";
import COLORS from "../../styles/colors.json";
import HorizontalCardSeparator from "../shared/HorizontalCardSeparator";
import Divider from "../shared/Divider";
import BareButton from "../CustomButtons/BareButton";

const HorizontalCourseList = ({ courses = [], listTitle = "", handleCourseClick = () => {} }) => {
    return (
        <View style={styles.flatListContainer}>
            <View style={styles.moreContainer}>
                <BoldText style={styles.groupTitle} fontSize={2.2}>
                    {listTitle}
                </BoldText>
                <BareButton style={styles.bareButton}>
                    <MaterialIcons name="arrow-back" size={28} color={COLORS.GREY_COLOR} />
                </BareButton>
            </View>
            <Divider style={styles.headerDivider} />
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={courses}
                horizontal
                keyExtractor={(item) => item.id.toString()}
                // ListHeaderComponent={<Card />}
                // ListHeaderComponentStyle={{marginLeft: 20}}
                contentContainerStyle={{ paddingVertical: 30, paddingHorizontal: 10 }}
                ItemSeparatorComponent={HorizontalCardSeparator}
                renderItem={({ item }) => (
                    <Card
                        handleCourseClick={() => {
                            handleCourseClick(item);
                        }}
                        title={item.title}
                        price={item.price}
                        teacher={item.teacher}
                        imageUrl={item.image}
                        offPercent={item.offPercent}
                        courseTime={item.time}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    flatListContainer: {
        flex: 1,
        heigth: 450,
        width: "100%",
        marginVertical: 10,
        backgroundColor: COLORS.WHITE_COLOR,
    },
    groupTitle: {
        color: COLORS.GREY_COLOR,
        marginVertical: 10,
        marginLeft: 20,
    },
    headerDivider: {
        height: 4,
        width: "50%",
    },
    moreContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    bareButton: {
        marginRight: 14,
    },
});
export default HorizontalCourseList;
