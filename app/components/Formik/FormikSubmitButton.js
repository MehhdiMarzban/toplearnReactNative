import { useFormikContext } from "formik";
import CustomButton from "../CustomButtons/CustomButton";

const FormikSubmitButton = ({ title, ...otherProps }) => {
    const { handleSubmit } = useFormikContext();
    return <CustomButton title={title} color="#33d9b2" onPress={handleSubmit} {...otherProps}/>;
};

export default FormikSubmitButton;
