import { useState, useEffect } from "react";
import { View, StyleSheet, Image, StatusBar, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import * as imagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

import IconButton from "../../components/CustomButtons/IconButton";
import RegularText from "../../components/CustomTexts/RegularText";
import HomeLayout from "../../components/Layouts/HomeLayout";
import Divider from "../../components/shared/Divider";
import COLORS from "../../styles/colors.json";
import globalStyles from "../../styles/globalStyles";
import { numberWithCommas } from "../../utils/price";

const ProfileScreen = () => {
    const profile = useSelector((state) => state.user);
    const [imageUri, setImageUri] = useState(null);

    useEffect(() => {
        if(profile.profileUri){
            setImageUri(profile.profileUri);
        }
    }, []);

    const handlePickImage = async () => {
        const result = await imagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [3, 3],
            mediaTypes: imagePicker.MediaTypeOptions.Images,
            quality: 1,
        });

        if (!result.cancelled) {
            setImageUri(result.uri);
            await AsyncStorage.setItem("profileUri", result.uri);
        }
    };

    return (
        <>
            <HomeLayout
                title="صفحه پروفایل"
                HeaderComponent={
                    <>
                        <View style={styles.headerDetails}>
                            <TouchableOpacity onPress={handlePickImage}>
                                {imageUri ? (
                                    <Image
                                        source={{uri: imageUri}}
                                        style={globalStyles.profile}
                                    />
                                ) : (
                                    <Image
                                        source={require("../../assets/profile.png")}
                                        style={globalStyles.profile}
                                    />
                                )}
                            </TouchableOpacity>
                            <View style={globalStyles.center}>
                                <RegularText style={styles.profileName} fontSize={1.6}>
                                    {profile.name}
                                </RegularText>
                                <RegularText style={styles.profileEmail} fontSize={1.5}>
                                    {profile.email}
                                </RegularText>
                            </View>
                        </View>
                        <Divider style={globalStyles.marginVertical} />
                        <RegularText style={styles.profileBalance} fontSize={1.8}>
                            موجودی حساب : {numberWithCommas(profile.balance)} تومان
                        </RegularText>
                    </>
                }>
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
            </HomeLayout>
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
    profileName: {
        color: COLORS.WHITE_COLOR,
    },
    profileEmail: {
        color: COLORS.LIGHT_GREY_COLOR,
    },
    profileBalance: {
        color: COLORS.WHITE_COLOR,
    },
});

export default ProfileScreen;
