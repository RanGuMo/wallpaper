"use strict";
require("../common/vendor.js");
function getTimeDiffDescription(timestamp) {
  const now = Date.now();
  const diff = now - timestamp;
  const diffSeconds = Math.floor(diff / 1e3);
  if (diffSeconds < 60) {
    return "1分钟内";
  } else if (diffSeconds < 3600) {
    const diffMinutes = Math.floor(diffSeconds / 60);
    return `${diffMinutes}分钟前`;
  } else if (diffSeconds < 86400) {
    const diffHours = Math.floor(diffSeconds / 3600);
    return `${diffHours}小时前`;
  } else if (diffSeconds < 2592e3) {
    const diffDays = Math.floor(diffSeconds / 86400);
    return `${diffDays}天前`;
  } else if (diffSeconds < 7776e3) {
    const diffMonths = Math.floor(diffSeconds / 2592e3);
    return `${diffMonths}个月前`;
  } else {
    return null;
  }
}
exports.getTimeDiffDescription = getTimeDiffDescription;
