import { Formik } from "formik";
import { View, StyleSheet, Keyboard } from "react-native";

import WideLayout from "../components/Layouts/WideLayout";
import { registerSchema } from "../validations/formValidations";
import { FormikTextField, FormikSubmitButton } from "../components/Formik";

const RegisterScreen = ({ navigation }) => {
    return (
        <>
            <WideLayout title="ثبت نام کاربر">
                        <Formik
                            initialValues={{
                                fullname: "",
                                email: "",
                                password: "",
                                passwordConfirmation: "",
                            }}
                            validationSchema={registerSchema}
                            onSubmit={(values) => {
                                console.log(values);
                                Keyboard.dismiss();
                            }}>
                            <>
                                <View style={styles.formContainer}>
                                    <FormikTextField
                                        name="fullname"
                                        placeHolder="نام و نام خانوادگی"
                                        iconName="account-circle"
                                        autoComplete="name"
                                    />

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

                                    <FormikTextField
                                        name="passwordConfirmation"
                                        placeHolder="تکرار رمز عبور"
                                        iconName="lock"
                                        autoComplete="password"
                                        secureTextEntry
                                    />
                                </View>
                                <View style={styles.buttonContainer}>
                                    <FormikSubmitButton title="ثبت نام" />
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
    margin: {
        marginVertical: 8
    }
});

export default RegisterScreen;
