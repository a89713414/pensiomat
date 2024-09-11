/* eslint-disable default-case */
import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";

export const createNotification = (type) => {
  switch (type) {
    case "info":
      NotificationManager.info("Info message");
      break;
    case "success":
      NotificationManager.success("נחזור אלייך בהקדם האפשרי");
      break;
    case "warning":
      NotificationManager.warning(
        "Warning message",
        "Close after 3000ms",
        3000
      );
      break;
    case "error":
      NotificationManager.error("משהו השתבש");
      break;
  }
};
