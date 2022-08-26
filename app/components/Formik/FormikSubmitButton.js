import { useFormikContext } from "formik";
import CustomOpacityButton from "../CustomButtons/CustomOpacityButton";

const FormikSubmitButton = ({ title, ...otherProps }) => {
    const { handleSubmit } = useFormikContext();
    return <CustomOpacityButton title={title} color="#33d9b2" onPress={handleSubmit} {...otherProps}/>;
};

export default FormikSubmitButton;
