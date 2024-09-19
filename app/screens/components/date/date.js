import { format, isToday, isYesterday } from "date-fns";

export default function formatDate(dateString) {
  const date = new Date(dateString);

  if (isToday(date)) {
    // Nếu ngày là hôm nay, hiển thị giờ
    return format(date, "HH:mm");
  } else if (isYesterday(date)) {
    // Nếu ngày là hôm qua, hiển thị "Hôm qua"
    return "Yesterday";
  } else {
    // Nếu không phải hôm nay hoặc hôm qua, hiển thị ngày theo định dạng ngày-tháng-năm
    return format(date, "MM-dd");
  }
}
