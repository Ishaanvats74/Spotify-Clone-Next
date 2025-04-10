import SpotifyApi, { LOGIN_URL } from "@/lib/spotify"
import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"

async function refreshAccessToken(token) {
  try {

    SpotifyApi.setAccessToken(token.accessToken);
    SpotifyApi.setRefreshToken(token.refreshToken);

    const { body: refreshToken } = await SpotifyApi.refreshAccessToken();
    console.log("REFRESH TOKEN IS", refreshToken);

    return {
      ...token,
      accessToken: refreshToken.access_token,
      accessTokenExpire: Date.now() + refreshToken.expires_in * 1000, // we need to convert to milliseconds
      refreshToken: refreshToken.refresh_token ?? token.refreshToken, // Fall back to old refresh token if new one is not returned
    }


  } catch (error){
    console.log(error);

    return {
      ...token,
      error : "RefereshAccessTokenError",
    };
  }
}

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization : LOGIN_URL ,
    }),
    // ...add more providers here
  ],
  secert : process.env.JWT_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({token , account , user }){

      // inital sign in
      if(account && user){
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.provideAccountId,
          accessTokenExpire: account.expires_at* 1000, // we need to convert to milliseconds
        }
      }

      // return previous token if the access token has not expired yet
      if(Date.now() < token.accessTokenExpire){
        console.log("Existing Access token is valid")
        return token;
      };

      //Access token has expired, try to update it
      console.log("Access token has expired, refreshing...");
      return await refreshAccessToken(token);
    },

    
  }
}

export default NextAuth(authOptions)