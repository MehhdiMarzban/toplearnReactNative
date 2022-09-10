import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

import Divider from "../shared/Divider";
import CartItem from "./CartItem";
import { useToplearnContext } from "../../hooks/useToplearnContext";

const CartItemsList = () => {
    const cartData = useSelector((state) => state.cart);
    const { handleDeleteOneItemCart } = useToplearnContext();

    return (
        <View style={styles.container}>
            <FlatList
                data={cartData}
                ItemSeparatorComponent={() => <Divider style={styles.divider} />}
                contentContainerStyle={styles.flatList}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <CartItem
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        handleDeleteOneItemCart={() => handleDeleteOneItemCart(item.id)}
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
