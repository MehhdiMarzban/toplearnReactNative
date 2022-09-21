import { View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import globalStyles from "../../../styles/globalStyles";
import BareButton from "../../Buttons/BareButton";
import Divider from "../../shared/Divider";
import BoldText from "../../Texts/BoldText";

const CourseListContainer = ({
    children,
    title = "",
    disableExpand = false,
    onExpandPress = () => {},
    containerStyle = {},
    childrenContainerStyle = {},
    ...otherProps
}) => {
    return (
        <View style={[styles.container, containerStyle]} {...otherProps}>
            <View style={styles.moreContainer}>
                <BoldText style={styles.groupTitle} fontSize={2.2}>
                    {title}
                </BoldText>
                {!disableExpand && (
                    <BareButton style={styles.bareButton} onPress={onExpandPress}>
                        <MaterialIcons
                            name="arrow-back"
                            size={28}
                            color={globalStyles.COLORS.GREY}
                        />
                    </BareButton>
                )}
            </View>
            <Divider style={styles.headerDivider} />
            <View style={childrenContainerStyle}>{children}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
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

export default CourseListContainer;
