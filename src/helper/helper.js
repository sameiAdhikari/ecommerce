import { addDays, formatDate } from "date-fns";

export const formatedSoldNumber = (number) => {
  if (number > 1000000000) {
    return (number / 1000000000).toFixed(2) + "B+";
  } else if (number > 1000000) {
    return (number / 1000000).toFixed(2) + "M+";
  } else if (number > 1000) {
    return (number / 1000).toFixed(2) + "K+";
  } else {
    return number + "+";
  }
};

export const formatPrice = (price) => {
  return price?.toFixed(2) + "$";
};

export const delivaryTime = (delivaryTime) => {
  const time = addDays(new Date(), delivaryTime);
  const formatedDate = formatDate(time, "dd/MM");
  const [day, month] = formatedDate.split("/");
  switch (month) {
    case "01":
      return "Jan" + " " + day;
    case "02":
      return "Feb" + " " + day;
    case "03":
      return "Mar" + " " + day;
    case "04":
      return "Apr" + " " + day;
    case "05":
      return "May" + " " + day;
    case "06":
      return "Jun" + " " + day;
    case "07":
      return "Jul" + " " + day;
    case "08":
      return "Aug" + " " + day;
    case "09":
      return "Sep" + " " + day;
    case "10":
      return "Oct" + " " + day;
    case "11":
      return "Nov" + " " + day;
    default:
      return "Dec" + " " + day;
  }
};
