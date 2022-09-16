import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import globalStyles from "../../styles/globalStyles";
import BoldText from "../Texts/BoldText";
import RegularText from "../Texts/RegularText";
import { numberWithCommas } from "../../utils/price";
import Badge from "./Badge";
import Divider from "./Divider";
import TabBarButton from "../Buttons/TabBarButton";

const Card = ({
    item = {
        title: "",
        teacher: "",
        price: 0,
        offPercent: false,
        courseTime: "00:00:00",
        imageUrl: require("../../assets/courses/ReactNative.jpg"),
    },
    owned = false,
    width = false,
    height = false,
    handleAddToCart = () => null,
    handleCourseClick = () => null,
}) => {
    return (
        <TouchableOpacity
            style={[styles.container, width && { width }, {height: "100%"}]}
            activeOpacity={0.7}
            onPress={handleCourseClick}>
            <Image
                resizeMode="cover"
                style={[styles.image, height && { height }]}
                source={item.image}
            />
            <View style={styles.cardBody}>
                <BoldText style={styles.titleText} fontSize={1.6} numberOfLines={2}>
                    {item.title}
                </BoldText>
                <View style={styles.infoContainer}>
                    <View style={styles.teacherContainer}>
                        <MaterialCommunityIcons
                            name="account-star"
                            size={20}
                            color={globalStyles.COLORS.LIGHT_GREY}
                        />
                        <RegularText style={styles.teacherText} fontSize={1.3}>
                            {item.teacher}
                        </RegularText>
                    </View>
                    <View style={styles.courseTime}>
                        <RegularText fontSize={1.3}>{item.time}</RegularText>
                    </View>
                </View>
                {!owned && (
                    <>
                        <View style={styles.priceContainer}>
                            <View style={styles.rightPriceContainer}>
                                <MaterialCommunityIcons
                                    name="cash-register"
                                    size={20}
                                    color={globalStyles.COLORS.LIGHT_GREY}
                                />
                                {item.price === 0 ? (
                                    <BoldText style={styles.teacherText} fontSize={1.3}>
                                        رایگان
                                    </BoldText>
                                ) : (
                                    <RegularText style={styles.teacherText} fontSize={1.3}>
                                        {numberWithCommas(item.price)} تومان
                                    </RegularText>
                                )}
                            </View>
                            {item.offPercent && (
                                <Badge>
                                    {item.offPercent}{" "}
                                    <MaterialCommunityIcons
                                        name="brightness-percent"
                                        size={10}
                                        color={globalStyles.COLORS.WHITE}
                                    />
                                </Badge>
                            )}
                        </View>
                        <Divider />
                        <View style={styles.buttonContainer}>
                            <TabBarButton style={styles.cardButton} onPress={handleAddToCart}>
                                <MaterialCommunityIcons
                                    color={globalStyles.COLORS.MEDIUM}
                                    name="cart-plus"
                                    size={30}
                                />
                            </TabBarButton>
                            <TabBarButton style={styles.cardButton} onPress={handleCourseClick}>
                                <MaterialCommunityIcons
                                    color={globalStyles.COLORS.MEDIUM}
                                    name="shopping-search"
                                    size={30}
                                />
                            </TabBarButton>
                        </View>
                    </>
                )}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 200,
        height: 320,
        backgroundColor: globalStyles.COLORS.WHITE,
        borderRadius: 8,
        elevation: 8,
        borderWidth: 1,
        borderColor: globalStyles.COLORS.LIGHT_GREY,
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
        color: globalStyles.COLORS.GREY,
        height: 50,
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
