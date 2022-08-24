import { Formik } from "formik";
import { View, StyleSheet, Keyboard } from "react-native";
import BareButton from "../components/CustomButtons/BareButton";

import WideLayout from "../components/Layouts/WideLayout";
import { loginSchema } from "../validations/formValidations";
import { FormikTextField, FormikSubmitButton } from "../components/Formik";

const LoginScreen = ({ navigation }) => {
    return (
        <>
            <WideLayout title="ورود کاربر">
                <Formik
                    initialValues={{ email: "", password: "" }}
                    // validationSchema={loginSchema}
                    onSubmit={(values) => {
                        console.log(values);
                        Keyboard.dismiss();
                        navigation.navigate("HomeScreen");
                    }}>
                    <>
                        <View style={styles.formContainer}>
                            <FormikTextField
                                name="email"
                                placeHolder="ایمیل کاربر"
                                iconName="email"
                                autoComplete="email"
                                keyboardType="email-address"
                            />

                            <FormikTextField
                                name="password"
                                placeHolder="رمز عبور"
                                iconName="lock"
                                autoComplete="password"
                                secureTextEntry
                            />
                        </View>
                        <View style={styles.buttonContainer}>
                            <FormikSubmitButton title="ورود" />
                            <BareButton onPress={() => navigation.goBack()}>
                                فراموشی رمز عبور
                            </BareButton>
                            <BareButton onPress={() => navigation.replace("WelcomeScreen")}>
                                برگشت
                            </BareButton>
                        </View>
                    </>
                </Formik>
            </WideLayout>
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
    formContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
});
export default LoginScreen;
