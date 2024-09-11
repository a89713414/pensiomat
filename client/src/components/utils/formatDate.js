export const formatDateHandler = (createdAt) => {
  const date = new Date(createdAt);
  const now = new Date(); // Get the current date and time
  // Check if the date is today
  if (
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear()
  ) {
    const timeString = date.toLocaleString("en-US", {
      timeZone: "Asia/Jerusalem",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    return `Today at ${timeString}`;
  }

  // Check if the date is yesterday
  const yesterday = new Date(now.setDate(now.getDate() - 1));
  if (
    date.getDate() === yesterday.getDate() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getFullYear() === yesterday.getFullYear()
  ) {
    const timeString = date.toLocaleString("en-US", {
      timeZone: "Asia/Jerusalem",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    return `Yesterday at ${timeString}`;
  }

  // Format the date as "day month at hour:minute"
  const dateTimeString = date.toLocaleString("en-US", {
    timeZone: "Asia/Jerusalem",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return dateTimeString;
};
