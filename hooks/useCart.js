import useSWR from "swr";

const useCart = (cartId) => {
  let cart;
  let update;
  if (cartId) {
    const { data, error, mutate } = useSWR(
      `https://api.chec.io/v1/carts/${cartId}`
    );
    if (error) return error.message;
    if (!data) return "Loading";
    cart = { ...data };
    update = mutate;
  } else {
    const { data, error } = useSWR(`https://api.chec.io/v1/carts/`);
    if (error) return error.message;
    if (!data) return "Loading";
    cart = { ...data };
  }
  return { cart: cart, update };
};

export default useCart;
