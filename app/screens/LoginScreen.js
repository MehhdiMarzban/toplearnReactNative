import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard, Text, Image } from "react-native";
import BareButton from "../components/CustomButtons/BareButton";

import CustomButton from "../components/CustomButtons/CustomButton";
import CustomInput from "../components/CustomInputs/CustomInput";
import ErrorText from "../components/CustomTexts/ErrorText";
import globalStyles from "../styles/globalStyles";
import { loginSchema } from "../validations/formValidations";

const LoginScreen = ({ navigation }) => {
    return (
        <>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={[globalStyles.container, styles.container]}>
                    <StatusBar style="light" backgroundColor="#1B1464" />
                    <View style={[styles.header, globalStyles.shadow]}>
                        <Text style={styles.textHeader}> ورود کاربر</Text>
                        <Image source={require("../assets/logo.png")} style={globalStyles.logo} />
                    </View>
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        validationSchema={loginSchema}
                        onSubmit={(values) => {
                            console.log(values);
                            Keyboard.dismiss();
                        }}>
                        {({ handleChange, handleSubmit, values, handleBlur, touched, errors }) => {
                            return (
                                <>
                                    <View style={styles.formContainer}>
                                        <CustomInput
                                            placeHolder="ایمیل کاربر"
                                            iconName="email"
                                            autoComplete="email"
                                            keyboardType="email-address"
                                            value={values.email}
                                            onChangeText={handleChange("email")}
                                            onBlur={handleBlur("email")}
                                        />
                                        <ErrorText touched={touched.email}>
                                            {errors.email}
                                        </ErrorText>

                                        <CustomInput
                                            placeHolder="رمز عبور"
                                            iconName="lock"
                                            autoComplete="password"
                                            secureTextEntry
                                            value={values.password}
                                            onChangeText={handleChange("password")}
                                            onBlur={handleBlur("password")}
                                        />
                                        <ErrorText touched={touched.password}>
                                            {errors.password}
                                        </ErrorText>
                                    </View>
                                    <View style={styles.buttonContainer}>
                                        <CustomButton
                                            title="ورود"
                                            color="#33d9b2"
                                            onPress={handleSubmit}
                                        />
                                        <BareButton onPress={() => navigation.goBack()}>
                                            فراموشی رمز عبور
                                        </BareButton>
                                        <BareButton
                                            onPress={() => navigation.replace("WelcomeScreen")}>
                                            برگشت
                                        </BareButton>
                                    </View>
                                </>
                            );
                        }}
                    </Formik>
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
        marginVertical: 30,
    },
    container: {
        justifyContent: "space-between",
        backgroundColor: "#fff",
    },
    formContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
});
export default LoginScreen;
