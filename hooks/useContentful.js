import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CDA_SPACE_ID,
    environment: process.env.NEXT_PUBLIC_CDA_ENVIRONMENT_ID,
    accessToken: process.env.NEXT_PUBLIC_CDA_TOKEN,
  });
  return {
    getEntries: (options) => {
      return client.getEntries(options);
    },
  };
};

export default useContentful;
