export const sendResponse = (success, status, message, data) => {
  return Response.json({
    success,
    status,
    message,
    data,
  });
};
