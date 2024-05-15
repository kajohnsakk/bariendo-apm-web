import { format, eachHourOfInterval } from "date-fns";

export const generateIntervalHours = (
  date: Date,
  start: number,
  end: number
) => {
  return eachHourOfInterval({
    start: new Date(date.getFullYear(), date.getMonth(), date.getDate(), start),
    end: new Date(date.getFullYear(), date.getMonth(), date.getDate(), end),
  });
};

export const formatDate = (date: Date) => {
  return format(date, "yyyy-MM-dd");
};

export const formatTime = (date: Date) => {
  return format(date, "hh:mm a");
};

export const formatDateTime = (date: Date) => {
  return format(date, "EEEE, MMMM dd, yyyy hh:mm a");
};

export const humanizeDate = (date: Date) => {
  return format(date, "dd MMM yyyy");
};
