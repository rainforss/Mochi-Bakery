import { createClient as createDeliveryClient } from "contentful";
import { createClient as createManagementClient } from "contentful-management";

const useContentful = (manageMode) => {
  const deliveryClient = createDeliveryClient({
    space: process.env.NEXT_PUBLIC_CDA_SPACE_ID,
    environment: process.env.NEXT_PUBLIC_CDA_ENVIRONMENT_ID,
    accessToken: process.env.NEXT_PUBLIC_CDA_TOKEN,
  });
  const managementClient = createManagementClient({
    accessToken: process.env.NEXT_PUBLIC_CMA_TOKEN,
  });

  if (manageMode) {
    return {
      createEntry: (contentType, entry) => {
        return managementClient
          .getSpace(process.env.NEXT_PUBLIC_CDA_SPACE_ID)
          .then((space) =>
            space.getEnvironment(process.env.NEXT_PUBLIC_CDA_ENVIRONMENT_ID)
          )
          .then((environment) => environment.createEntry(contentType, entry));
      },
    };
  } else {
    return {
      getEntries: (options) => {
        return deliveryClient.getEntries(options);
      },
    };
  }
};

export default useContentful;
