import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
    email: Yup.string().required("پر کردن ایمیل ضروری است!").email("ایمیل وارد شده صحیح نیست!"),
    password: Yup.string()
        .required("پر کردن رمز عبور ضروری است!")
        .min(6, "رمز عبور حداقل باید 6 کاراکتر باشد!")
        .max(16, "رمز عبور باید حداکثر 16 کاراکتر باشد!"),
});

export const registerSchema = Yup.object().shape({
    fullname: Yup.string()
        .required("پر کردن نام و نام خانوادگی ضروری است!")
        .min(4, "نام و نام خانوادگی باید بیشتر از 4 کاراکتر باشد!"),
    email: Yup.string().required("پر کردن ایمیل ضروری است!").email("ایمیل وارد شده صحیح نیست!"),
    password: Yup.string()
        .required("پر کردن رمز عبور ضروری است!")
        .min(6, "رمز عبور حداقل باید 6 کاراکتر باشد!")
        .max(16, "رمز عبور باید حداکثر 16 کاراکتر باشد!"),
    passwordConfirmation: Yup.string()
        .required("پر کردن این فیلد ضروری است!")
        .oneOf([Yup.ref("password")], "رمز عبور ها باید یکسان باشند!"),
});
