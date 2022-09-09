import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import COLORS from "../../styles/colors.json";
import BoldText from "../CustomTexts/BoldText";
import RegularText from "../CustomTexts/RegularText";
import { numberWithCommas } from "../../utils/price";
import Badge from "./Badge";
import Divider from "./Divider";
import TabBarButton from "../CustomButtons/TabBarButton";

const Card = ({
    title = "",
    teacher = "",
    price = 0,
    fullWidth = false,
    offPercent = false,
    courseTime = "00:00:00",
    imageUrl = require("../../assets/courses/ReactNative.jpg"),
    handleAddToCart = () => {
        return null;
    },
    handleCourseClick = () => {
        return null;
    },
}) => {
    return (
        <TouchableOpacity
            style={[styles.container, fullWidth && { width: "100%", height: 420 }]}
            activeOpacity={0.7}
            onPress={handleCourseClick}>
            <Image
                resizeMode="contain"
                style={[styles.image, fullWidth && { height: 250 }]}
                source={imageUrl}
            />
            <View style={styles.cardBody}>
                <BoldText style={styles.titleText} fontSize={1.6} numberOfLines={2}>
                    {title}
                </BoldText>
                <View style={styles.infoContainer}>
                    <View style={styles.teacherContainer}>
                        <MaterialCommunityIcons
                            name="account-star"
                            size={20}
                            color={COLORS.LIGHT_GREY_COLOR}
                        />
                        <RegularText style={styles.teacherText} fontSize={1.3}>
                            {teacher}
                        </RegularText>
                    </View>
                    <View style={styles.courseTime}>
                        <RegularText fontSize={1.3}>{courseTime}</RegularText>
                    </View>
                </View>
                <View style={styles.priceContainer}>
                    <View style={styles.rightPriceContainer}>
                        <MaterialCommunityIcons
                            name="cash-register"
                            size={20}
                            color={COLORS.LIGHT_GREY_COLOR}
                        />
                        {price === 0 ? (
                            <BoldText style={styles.teacherText} fontSize={1.3}>
                                رایگان
                            </BoldText>
                        ) : (
                            <RegularText style={styles.teacherText} fontSize={1.3}>
                                {numberWithCommas(price)} تومان
                            </RegularText>
                        )}
                    </View>
                    {offPercent && (
                        <Badge>
                            {offPercent}{" "}
                            <MaterialCommunityIcons
                                name="brightness-percent"
                                size={10}
                                color={COLORS.WHITE_COLOR}
                            />
                        </Badge>
                    )}
                </View>
                <Divider />
                <View style={styles.buttonContainer}>
                    <TabBarButton style={styles.cardButton} onPress={handleAddToCart}>
                        <MaterialCommunityIcons name="cart-plus" size={30} />
                    </TabBarButton>
                    <TabBarButton style={styles.cardButton} onPress={handleCourseClick}>
                        <MaterialCommunityIcons name="shopping-search" size={30} />
                    </TabBarButton>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 200,
        height: 320,
        backgroundColor: COLORS.WHITE_COLOR,
        borderRadius: 8,
        elevation: 8,
        borderWidth: 1,
        borderColor: COLORS.LIGHT_GREY_COLOR,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: 140,
    },
    cardBody: {
        width: "100%",
        padding: 10,
    },
    titleText: {
        color: COLORS.GREY_COLOR,
        height: 50,
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
    rightPriceContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 4,
    },
    cardButton: {
        padding: 4,
        borderRadius: 8,
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

export default Card;
