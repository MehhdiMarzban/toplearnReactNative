import * as Notification from "expo-notifications";
import { useEffect } from "react";

import globalStyles from "../styles/globalStyles";

Notification.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
        priority: 1,
    }),
});

//* first argument is notification listener
const useLocalNotification = (notificationListener) => {
    useEffect(() => {
        if (notificationListener) {
            Notification.addNotificationResponseReceivedListener(notificationListener);
        }
    }, []);
    return async (content = { title: "", body: "", data: {} }) => {
        await Notification.scheduleNotificationAsync({
            content: {
                title: content.title,
                body: content.body,
                data: content.data,
                vibrate: true,
                badge: 2,
                sticky: false,
                color: globalStyles.COLORS.PRIMARY,
                launchImageName: require("../assets/logo.png"),
            },
            trigger: { seconds: 2 },
        });
    };
};

export default useLocalNotification;
