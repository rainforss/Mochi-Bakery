import Commerce from "@chec/commerce.js";

const checAPIKey = process.env.NEXT_PUBLIC_CHEC_PUBLIC_KEY;
export default new Commerce(checAPIKey);
