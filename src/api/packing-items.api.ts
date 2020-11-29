import httpClient from "./httpClient";

export enum Routes {
  CREATE_CATEGORY = "/category",
  GET_CATEGORIES = "/categories",
  GET_ITEMS = "/items",
  CREATE_ITEM = "/items/add",
  GET_TRIP = "/trip/:id",
  CREATE_TRIP = "/trip/add",
  POST_TRIP_AS_DONE = "/trip/done"
}

const getAllItems = async (): Promise<any[]> => {
  return await httpClient.get(Routes.GET_ITEMS);
};

const createItem = async (data: any): Promise<any> => {
  return await httpClient.post(Routes.CREATE_ITEM, data);
};

const getAllCategories = async (): Promise<any[]> => {
  return await httpClient.get(Routes.GET_CATEGORIES);
};

const createCategory = async (data: any): Promise<any> => {
  return await httpClient.post(Routes.CREATE_CATEGORY, data);
};

const createTrip = async (data: any): Promise<any> => {
  return await httpClient.post(Routes.CREATE_TRIP, data);
};

const getTrip = async (id: any): Promise<any> => {
  return await httpClient.get(Routes.GET_TRIP.replace(":id", id));
};

const markTripAsDone = async (data: any): Promise<any> => {
  return await httpClient.post(Routes.POST_TRIP_AS_DONE, data);
};

export {
  getAllItems,
  createItem,
  getAllCategories,
  createCategory,
  getTrip,
  createTrip,
  markTripAsDone,
};
