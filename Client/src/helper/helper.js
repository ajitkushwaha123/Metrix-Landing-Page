import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getAllSubscriptions = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/subscription`);

    return Promise.resolve({
      status: "true",
      data: response.data.subscriptions,
    });
  } catch (err) {
    return Promise.reject({ status: "false", message: err.message });
  }
};

export const getSubscriptionsBysubscriptionType = async (subscriptionType) => {
    console.log("Subscription Type:", subscriptionType);
  try {
    const response = await axios.get(`${API_URL}/api/subscription/${subscriptionType}`);

    return Promise.resolve({
      status: "true",
      data: response.data.subscription,
    });
  } catch (err) {
    return Promise.reject({ status: "false", message: err.message });
  }
};

export const submitCheckoutDetails = async (values) => {
  console.log("Submitting :", values);
  try{

    if(!values.name || !values.company || !values.email || !values.phone || !values.address || !values.city || !values.state || !values.postalCode){
      return Promise.reject({ status : "false" , message : "All fields are required"});
    }

    const response = await axios.post(`${API_URL}/api/checkout` , values);
    return Promise.resolve({
      status: "true",
      message: response.data.message || "An error occurred",
    });
  }catch(err){
    return Promise.reject({
      status: "false",
      message: err.message || "An error occurred",
    });
  }
}