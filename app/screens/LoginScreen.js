import { Formik } from "formik";
import { View, StyleSheet, Keyboard } from "react-native";
import BareButton from "../components/CustomButtons/BareButton";

import WideContainer from "../components/Containers/WideContainer";
import CustomButton from "../components/CustomButtons/CustomButton";
import CustomInput from "../components/CustomInputs/CustomInput";
import ErrorText from "../components/CustomTexts/ErrorText";
import { loginSchema } from "../validations/formValidations";

const LoginScreen = ({ navigation }) => {
    return (
        <>
            <WideContainer title="ورود کاربر">
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
                                    <ErrorText touched={touched.email}>{errors.email}</ErrorText>

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
                                    <BareButton onPress={() => navigation.replace("WelcomeScreen")}>
                                        برگشت
                                    </BareButton>
                                </View>
                            </>
                        );
                    }}
                </Formik>
            </WideContainer>
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
