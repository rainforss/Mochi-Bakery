import React from "react";
import { providers, signIn } from "next-auth/client";

export default function SignIn({ providers }) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            onClick={() =>
              signIn(provider.id, { callbackUrl: "http://localhost:3000/" })
            }
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
}

SignIn.getInitialProps = async (context) => {
  return {
    providers: await providers(context),
  };
};
