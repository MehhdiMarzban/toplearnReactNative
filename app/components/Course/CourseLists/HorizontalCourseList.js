import { FlatList, StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import BoldText from "../../CustomTexts/BoldText";
import Card from "../../shared/Card";
import COLORS from "../../../styles/colors.json";
import HorizontalCardSeparator from "../../shared/HorizontalCardSeparator";
import Divider from "../../shared/Divider";
import BareButton from "../../CustomButtons/BareButton";

const HorizontalCourseList = ({
    courses = [],
    listTitle = "",
}) => {
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
                        item={item}
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
