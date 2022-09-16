import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

import CustomPressableButton from "../../Buttons/CustomPressableButton";
import Badge from "../../Shared/Badge";
import RegularText from "../../Texts/RegularText";
import Price from "../../Shared/Price";
import globalStyles from "../../../styles/globalStyles";
import { useToplearnContext } from "../../../hooks/useToplearnContext";

const BottomDetails = ({ data }) => {
    const { handleAddToCart } = useToplearnContext();

    return (
        <View style={styles.bottomContainer}>
            <View style={styles.bottomContainerTop}>
                <View style={styles.infoContainer}>
                    <View style={styles.teacherContainer}>
                        <MaterialCommunityIcons
                            name="account-star"
                            size={25}
                            color={globalStyles.COLORS.LIGHT_GREY}
                        />
                        <RegularText style={styles.teacherText} fontSize={1.6}>
                            {data.teacher}
                        </RegularText>
                    </View>
                    <View style={styles.courseTime}>
                        <RegularText style={styles.courseTimeText} fontSize={1.6}>
                            {data.time}
                        </RegularText>
                    </View>
                </View>
                <View style={styles.priceContainer}>
                    <Price price={data.price} offPercent={data.offPercent} />
                    {data.offPercent && (
                        <Badge>
                            {data.offPercent}{" "}
                            <MaterialCommunityIcons
                                name="brightness-percent"
                                size={10}
                                color={globalStyles.COLORS.WHITE}
                            />
                        </Badge>
                    )}
                </View>
            </View>
            <CustomPressableButton
                title="افزودن به سبد خرید"
                pressableStyle={styles.button}
                onPress={() => handleAddToCart(data)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    bottomContainer: {
        position: "absolute",
        bottom: 0,
        height: 110,
        width: "100%",
        backgroundColor: globalStyles.COLORS.WHITE,
        justifyContent: "space-between",
        paddingTop: 6,
        elevation: 10,
        borderTopWidth: 1,
        borderTopColor: globalStyles.COLORS.LIGHT,
    },
    bottomContainerTop: {
        paddingHorizontal: 10,
    },
    button: {
        width: "100%",
        borderRadius: 0,
    },
    teacherText: {
        color: globalStyles.COLORS.GREY,
        marginLeft: 4,
    },
    teacherContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    priceContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
    },
    infoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    courseTime: {
        alignItems: "center",
        justifyContent: "center",
    },
    courseTimeText: {
        color: globalStyles.COLORS.GREY,
    },
});

export default BottomDetails;
