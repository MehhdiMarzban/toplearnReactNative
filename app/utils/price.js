export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const calculateSum = (cartData) => {
    return cartData.reduce((sum, currentValue) => {
        return sum + Number(currentValue.price);
    }, 0);
};
