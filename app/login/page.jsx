"use client";
import { getProviders, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

const LoginPage = () => {
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    getProviders()
      .then((result) => setProviders(result))
      .catch((error) => console.error("Error fetching providers:", error));
  }, []);

  return (
    <div>
      <img src="/SpotifyLogo.png" alt="Spotify Logo" width={208} height={208} />
      {providers &&
        Object.values(providers).map((provider) => (
          <button key={provider.id} onClick={() => signIn(provider.id)}>
            Login with {provider.name}
          </button>
        ))}
    </div>
  );
};

export default LoginPage;