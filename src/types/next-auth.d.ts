// types/next-auth.d.ts

import NextAuth from "next-auth";
import { Roles } from "./Roles";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      name?: string | null;
      email?: string | null;
      role: Roles;
    };
  }

  interface User {
    id: number;
    name?: string | null;
    email?: string | null;
    role: Roles;
  }
}
