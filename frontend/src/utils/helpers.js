export const formatViews = (views) => {

  if (views >= 1000000) {
    return (views / 1000000).toFixed(1) + "M";
  }

  if (views >= 1000) {
    return (views / 1000).toFixed(1) + "K";
  }

  return views;

};

export const timeAgo = (date) => {

  const seconds =
    Math.floor((new Date() - new Date(date)) / 1000);

  const interval = seconds / 3600;

  if (interval > 24) {
    return Math.floor(interval / 24) + " days ago";
  }

  if (interval > 1) {
    return Math.floor(interval) + " hours ago";
  }

  return Math.floor(seconds / 60) + " minutes ago";

};