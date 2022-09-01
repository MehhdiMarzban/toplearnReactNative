export const userAction = () => {
    return async (dispatch, getState) => {
        await dispatch({
            type: "SET_USER",
            payload: {
                name: "مهدی مرزبان",
                email: "marzban72@gmail.com",
                balance: 4000000,
                courses: [],
                img: "",
            },
        });
    };
};
