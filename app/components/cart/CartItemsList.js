import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

import Divider from "../shared/Divider";
import CartItem from "./CartItem";

const CartItemsList = () => {
    const cartData = useSelector((state) => state.cart);
    return (
        <View style={styles.container}>
            <FlatList
                data={cartData}
                ItemSeparatorComponent={() => <Divider style={styles.divider} />}
                contentContainerStyle={styles.flatList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                        <CartItem
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            handleDelete={() => null}
                        />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 200,
    },
    divider: {
        marginVertical: 4,
    },
});

export default CartItemsList;
