import AsyncStorage from "@react-native-async-storage/async-storage";

export const userAction = () => {
    return async (dispatch, getState) => {
        let profileUri = await AsyncStorage.getItem("profileUri");
        if(!profileUri) {
            profileUri = null;
        }

        await dispatch({
            type: "SET_USER",
            payload: {
                name: "مهدی مرزبان",
                email: "marzban72@gmail.com",
                balance: 4000000,
                courses: [],
                profileUri,
            },
        });
    };
};
