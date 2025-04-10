"use client";
import { getProviders, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

const page = () => {
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    getProviders()
      .then((result) => setProviders(result))
      .catch((error) => console.error("Error fetching providers:", error));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-black h-screen space-y-5"> 
      <img src="/SpotifyLogo.png" alt="Spotify Logo" width={208} height={208} />
      {providers &&
        Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button  onClick={() => signIn(provider.id, {callbackUrl: "/"} )} className="bg-[#18D860] text-white p-5 rounded-full ">
              Login with {provider.name}
            </button>
          </div>
        ))}
    </div>
  );
};

export default page;