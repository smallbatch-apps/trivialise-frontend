export const responseInterceptor = (response: any) => {
  // const url = new URL(response.request.responseURL);
  if (!Array.isArray(response.data)) {
    response.data = replaceDates(response.data);
    return response;
  }

  response.data = response.data.map(replaceDates);
  return response;
};

const replaceDates = (item: any) => {
  if (item.createdAt) item.createdAt = new Date(item.createdAt);
  if (item.updatedAt) item.updatedAt = new Date(item.updatedAt);
  if (item.deletedAt) item.deletedAt = new Date(item.deletedAt);
  if (item.startTime) item.startTime = new Date(item.startTime);
  if (item.endTime) item.endTime = new Date(item.endTime);
  return item;
};
