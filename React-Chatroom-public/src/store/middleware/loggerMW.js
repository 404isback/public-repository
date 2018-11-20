/**
 * This middleware is used to automatically perform a console.log on actions.
 * Actions must carry the timestamp.
 */
const loggerMW = store => next => (action) => {
  if (action.message) {
    let date = new Date();
    const formatDate = (date) => ((date < 10 ? '0' : '') + date)
    const timestamp = (
            formatDate(date.getHours()) + ':' 
        + formatDate(date.getMinutes()) + ':'
        + formatDate(date.getSeconds())
    );
    action.message.timestamp = timestamp;
  }
  next(action);
};

export default loggerMW;