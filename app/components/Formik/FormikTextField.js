import CustomInput from "../CustomInputs/CustomInput";
import ErrorText from "./FormikErrorText";
import {useFormikContext} from "formik";

const FormikTextField = ({ name, ...otherProps }) => {
    const {handleBlur, handleChange, values, errors, touched}  = useFormikContext();
    return (
        <>
            <CustomInput
                {...otherProps}
                value={values[name]}
                onChangeText={handleChange(name)}
                onBlur={handleBlur(name)}
            />
            <ErrorText touched={touched[name]}>{errors[name]}</ErrorText>
        </>
    );
};

export default FormikTextField;
