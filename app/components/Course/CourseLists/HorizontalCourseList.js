import { FlatList, StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import BoldText from "../../Texts/BoldText";
import Card from "../../shared/Card";
import globalStyles from "../../../styles/globalStyles";
import HorizontalCardSeparator from "../../shared/HorizontalCardSeparator";
import Divider from "../../shared/Divider";
import BareButton from "../../Buttons/BareButton";
import { useToplearnNavigation } from "../../../hooks/useTopLearnNavigation";
import { useToplearnContext } from "../../../hooks/useToplearnContext";

const HorizontalCourseList = ({ courses = [], listTitle = "" }) => {
    const { handleAddToCart } = useToplearnContext();
    const { handleCourseClick } = useToplearnNavigation();

    return (
        <View style={styles.flatListContainer}>
            <View style={styles.moreContainer}>
                <BoldText style={styles.groupTitle} fontSize={2.2}>
                    {listTitle}
                </BoldText>
                <BareButton style={styles.bareButton}>
                    <MaterialIcons name="arrow-back" size={28} color={globalStyles.COLORS.GREY} />
                </BareButton>
            </View>
            <Divider style={styles.headerDivider} />
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={courses}
                horizontal
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ paddingVertical: 30, paddingHorizontal: 10 }}
                ItemSeparatorComponent={HorizontalCardSeparator}
                renderItem={({ item }) => (
                    <Card
                        handleAddToCart={() => handleAddToCart(item)}
                        handleCourseClick={() => handleCourseClick(item)}
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
        backgroundColor: globalStyles.COLORS.WHITE,
    },
    groupTitle: {
        color: globalStyles.COLORS.GREY,
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
