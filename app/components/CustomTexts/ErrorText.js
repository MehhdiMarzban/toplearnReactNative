import { Text } from "react-native";

const ErrorText = ({ children, touched }) => {
    return <Text style={{ color: "red", fontFamily: "vazir" }}>{touched ? children : " "}</Text>;
};

export default ErrorText;
