import { Image, View, StyleSheet } from "react-native";

import BoldText from "../../Texts/BoldText";
import RegularText from "../../Texts/RegularText";
import globalStyles from "../../../styles/globalStyles";
import { useRelativeSize } from "../../../hooks/useRelativeSize";

const HeaderDetails = ({ data }) => {
    //* using this sizes for image of single course
    const [width, height] = useRelativeSize();

    return (
        <View style={styles.scrollViewContainer}>
            <Image
                resizeMode="cover"
                style={[styles.image, { width, height }]}
                source={data.image}
            />
            <BoldText fontSize={2.2} style={styles.title}>
                {data.title}
            </BoldText>
            <RegularText style={styles.text} fontSize={1.8}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
                می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و
                متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
                الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
                داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان
                مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود
                طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
                ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
                با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
                طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در
                این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ
                به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته
                اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید
                سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
                درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها
                شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
                فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی
                و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </RegularText>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingVertical: 10,
        backgroundColor: globalStyles.COLORS.WHITE,
        width: "100%",
    },
    image: {
        borderRadius: 10,
    },
    text: {
        textAlign: "justify",
        padding: 20,
        paddingBottom: 50,
        color: globalStyles.COLORS.BODY,
        lineHeight: 25,
    },
    button: {
        position: "absolute",
        width: "90%",
        bottom: 10,
    },
    title: {
        marginTop: 20,
        marginBottom: 10,
        color: globalStyles.COLORS.TITLE,
    },
    scrollViewContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
});

export default HeaderDetails;
