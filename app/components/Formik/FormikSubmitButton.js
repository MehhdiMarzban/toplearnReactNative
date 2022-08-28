import { useFormikContext } from "formik";

import CustomOpacityButton from "../CustomButtons/CustomOpacityButton";
import COLORS from "../../styles/colors.json"

const FormikSubmitButton = ({ title, ...otherProps }) => {
    const { handleSubmit } = useFormikContext();
    return <CustomOpacityButton title={title} color={COLORS.CYAN_COLOR} onPress={handleSubmit} {...otherProps}/>;
};

export default FormikSubmitButton;
