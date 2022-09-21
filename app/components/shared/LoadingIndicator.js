import AnimatedLottieView from "lottie-react-native";
const LoadingIndicator = () => {
    return (
        <AnimatedLottieView
            autoPlay
            loop
            source={require("../../assets/animations/loading.json")}
        />
    );
};

export default LoadingIndicator;
