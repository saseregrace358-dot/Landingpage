import api from "./api";

export const initializePayment = (
  plan: string,
  email: string
) => {
  return api.post("/public/payments/initialize", {
    plan,
    email,
  });
};