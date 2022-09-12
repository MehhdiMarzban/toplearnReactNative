import { useFormikContext } from "formik";

import CustomOpacityButton from "../Buttons/CustomOpacityButton";
import globalStyles from "../../styles/globalStyles";

const FormikSubmitButton = ({ title, ...otherProps }) => {
    const { handleSubmit } = useFormikContext();
    return (
        <CustomOpacityButton
            title={title}
            color={globalStyles.COLORS.CYAN}
            onPress={handleSubmit}
            {...otherProps}
        />
    );
};

export default FormikSubmitButton;
