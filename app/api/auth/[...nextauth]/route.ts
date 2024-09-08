import NextAuth from "next-auth/next";
import { authOption } from "./optons";

const handler = NextAuth(authOption);
export {handler as GET , handler as POST}