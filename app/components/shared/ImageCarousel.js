import { Image, View } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";

const images = [
    require("../../assets/courses/Electron.jpg"),
    require("../../assets/courses/ES.jpg"),
    require("../../assets/courses/VSCode.jpg"),
    require("../../assets/courses/ReactJs.jpg"),
];

const ImageCarousel = ({
    data = [...images],
    onPress = () => null,
    width = "100%",
    height = "100%",
    ...otherProps
}) => {
    return (
        <View style={{ width, height }}>
            <SwiperFlatList
                data={data}
                autoplayLoopKeepAnimation
                autoplay
                autoplayDelay={3}
                autoplayLoop
                index={0}
                showPagination
                renderItem={({ item }) => (
                    <View>
                        <Image source={item} style={{ width, height }} />
                    </View>
                )}
                {...otherProps}
            />
        </View>
    );
};

export default ImageCarousel;
