import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

import CustomPressableButton from "../../Buttons/CustomPressableButton";
import Badge from "../../shared/Badge";
import RegularText from "../../Texts/RegularText";
import Price from "../../shared/Price";
import COLORS from "../../../styles/colors.json";
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
                            color={COLORS.LIGHT_GREY_COLOR}
                        />
                        <RegularText style={styles.teacherText} fontSize={1.6}>
                            {data.teacher}
                        </RegularText>
                    </View>
                    <View style={styles.courseTime}>
                        <RegularText fontSize={1.6}>{data.time}</RegularText>
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
                                color={COLORS.WHITE_COLOR}
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
        backgroundColor: COLORS.WHITE_COLOR,
        justifyContent: "space-between",
        paddingTop: 6,
        elevation: 10,
    },
    bottomContainerTop: {
        paddingHorizontal: 10,
    },
    button: {
        width: "100%",
        borderRadius: 0,
    },
    teacherText: {
        color: COLORS.GREY_COLOR,
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
});

export default BottomDetails;
