import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard, Text } from "react-native";

import CustomButton from "../components/CustomButtons/CustomButton";
import CustomInput from "../components/CustomInputs/CustomInput";
import globalStyles from "../styles/globalStyles";

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={[globalStyles.container, styles.container]}>
                    <StatusBar style="light" backgroundColor="#1B1464" />
                    <View style={styles.header}>
                        <Text style={styles.textHeader}> ورود کاربر</Text>
                    </View>
                    <View style={styles.formContainer}>
                        <CustomInput
                            placeHolder="ایمیل کاربر"
                            iconName="email"
                            autoComplete="email"
                            keyboardType="email-address"
                            value={email}
                            onChangeText={setEmail}
                        />
                        <CustomInput
                            placeHolder="رمز عبور"
                            iconName="lock"
                            autoComplete="password"
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <CustomButton title="ورود" color="#33d9b2" />
                        <TouchableWithoutFeedback>
                            <Text style={[globalStyles.linkText, {marginVertical: 10}]} onPress={() => navigation.goBack()}>فراموشی رمز عبور</Text>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        marginVertical: 20,
        width: "70%",
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        backgroundColor: "#1B1464",
        width: "100%",
        height: 200,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    textHeader: {
        color: "#FFFFFF",
        fontFamily: "vazir-bold",
        fontSize: 25,
    },
    container: {
        justifyContent: "space-between",
    },
    formContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
});
export default LoginScreen;
