import { Formik } from "formik";
import { View, StyleSheet, Keyboard } from "react-native";
import Toast from "react-native-toast-message";

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
                        // ToastAndroid.showWithGravity("خوش آمدید!", ToastAndroid.LONG, ToastAndroid.TOP);
                        Toast.show({
                            text1: "خوش اومدی!",
                            text2: "مهدی مرزبان عزیز",
                            position: "top",
                            type: "custom",
                            // props: { bg: "lawngreen" },
                        });
                        Keyboard.dismiss();
                        navigation.reset({
                            index: 0,
                            routes: [{name: "HomeScreen"}],
                        })
                        // navigation.navigate("HomeScreen");
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
                            <BareButton onPress={() => navigation.goBack()} fontSize={1.8} style={styles.margin}>
                                فراموشی رمز عبور
                            </BareButton>
                            <BareButton onPress={() => navigation.replace("WelcomeScreen")} fontSize={1.8} style={styles.margin}>
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
    margin: {
        marginVertical:8
    }
});
export default LoginScreen;
