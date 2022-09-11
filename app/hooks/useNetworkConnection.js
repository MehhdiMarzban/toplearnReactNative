import { useEffect, useState } from "react";
import netInfo from "@react-native-community/netinfo";


export const useNetworkConnection = () => {
    //* disconnect alert
    const [isConnected, setIsConnected] = useState(true);

    useEffect(() => {
        //* one of way of using netinfo
        // netInfo.fetch().then((value) => setIsConnected(!value.isConnected));

        //* this is second way of using netinfo
        netInfo.addEventListener((state) => setIsConnected(state.isConnected));
    }, []);

    return isConnected;
};
