import useSWR from "swr";

const useCart = (cartId) => {
  let cart;
  if (cartId) {
    const { data, error } = useSWR(`https://api.chec.io/v1/carts/${cartId}`);
    if (error) return error.message;
    if (!data) return "Loading";
    cart = { ...data };
  } else {
    const { data, error } = useSWR(`https://api.chec.io/v1/carts/`);
    if (error) return error.message;
    if (!data) return "Loading";
    cart = { ...data };
  }
  return cart;
};

export default useCart;
