import { View, StyleSheet, Image, StatusBar } from "react-native";

import IconButton from "../../components/CustomButtons/IconButton";
import HeaderText from "../../components/CustomTexts/HeaderText";
import RegularText from "../../components/CustomTexts/RegularText";
import Divider from "../../components/shared/Divider";
import COLORS from "../../styles/colors.json";
import globalStyles from "../../styles/globalStyles";
import { numberWithCommas } from "../../utils/price";

const ProfileScreen = () => {
    return (
        <>
            <View>
                <View style={styles.header}>
                    <HeaderText>صفحه پروفایل</HeaderText>
                    <View style={styles.headerDetails}>
                        <Image
                            source={require("../../assets/profile.png")}
                            style={globalStyles.profile}
                        />
                        <View style={globalStyles.center}>
                            <RegularText style={{ color: COLORS.WHITE_COLOR }}>
                                مهدی مرزبان
                            </RegularText>
                            <RegularText style={{ color: COLORS.LIGHT_GREY_COLOR }}>
                                marzban72@gmail.com
                            </RegularText>
                        </View>
                    </View>
                    <Divider style={globalStyles.marginVertical} />
                    <RegularText style={{ color: COLORS.WHITE_COLOR }}>
                        موجودی حساب : {numberWithCommas(3000000)} تومان
                    </RegularText>
                </View>
                <View style={styles.main}>
                    <IconButton btnTitle="مشاهده حساب کاربری" icon="account" />
                    <Divider />
                    <IconButton btnTitle="ویرایش اطلاعات" icon="account-edit" />
                    <Divider />
                    <IconButton btnTitle="دوره های من" icon="video-box" />
                    <Divider />
                    <IconButton btnTitle="تغییر رمز عبور" icon="account-lock" />
                    <Divider />
                    <IconButton btnTitle="فاکتور های من" icon="clipboard-list" />
                    <Divider />
                    <IconButton btnTitle="تیکت ها" icon="chat-question" />
                    <Divider />
                    <IconButton btnTitle="خروج از حساب کاربری" icon="exit-to-app" />
                    <Divider />
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: COLORS.PRIMARY_COLOR,
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 10,
        elevation: 8,
    },
    headerDetails: {
        width: "100%",
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    main: {
        justifyContent: "center",
        alignItems: "center",
    },
});

export default ProfileScreen;
