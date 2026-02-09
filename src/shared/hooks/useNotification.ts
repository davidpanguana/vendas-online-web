import { notification as notificationAntd} from "antd";
import { useGlobalContext } from "./useGlobalContext";
import { useEffect } from "react";

export const useNotification = () => {
  const [api, contextHolder] = notificationAntd.useNotification();
  const { notification, setNotification } = useGlobalContext();

  useEffect(() => {
    if (notification?.message && notification?.type) {
      api[notification.type]({
        message: notification.message,
        description: notification.description,
        placement: 'bottomRight',
      });

      // limpa depois de mostrar (IMPORTANTE)
      setNotification(undefined);
    }
  }, [notification]);

  return {
    contextHolder,
  };
};
