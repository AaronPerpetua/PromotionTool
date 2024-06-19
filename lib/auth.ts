 
// import { PrismaAdapter } from "@auth/prisma-adapter"
// import bcrypt from "bcrypt";
// import prisma from "./db"
// import CredentialsProvider from "next-auth/providers/credentials";
 
// const adapter = PrismaAdapter(prisma);
 

// export const authOptions = {
//   adapter,
//   providers: [
 
//     CredentialsProvider({
//       name: 'Credentials',
   
//       credentials: {
//         username: { label: "Username", type: "username", placeholder: "test@example.com" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials, req) {
//         // if(!credentials?.username || credentials?.password){
//         //   return null
//         // }
//         const username = credentials?.username;
//         const password = credentials?.password;

//         const user = await prisma.user.findUnique({
//           where: {username: username}
//         });

 
//         if (password && user && bcrypt.compareSync(password, user.password)) {
//           return user;
//         }
        
//         return null
//       }
//     })
//   ],
// }
import GithubProvider from "next-auth/providers/github"
 
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "./db"
import type { Adapter } from 'next-auth/adapters';
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcrypt";
 
 
export const authOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  secret: process.env.AUTH_SECRET,
  
   providers: [
 
    Credentials({
      name: 'Credentials',
      // id: "username-login",
      credentials: {
        username: { label: "Username", type: "username", placeholder: "test@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // if(!credentials?.username || credentials?.password){
        //   return null
        // }
        const username = credentials?.username;
        const password = credentials?.password;

        const user = await prisma.user.findUnique({
          where: {username: username}
        });

     
 
        if (password && user && bcrypt.compareSync(password, user.password)) {
            
          return user;
        }
        
      return null
      }
    }),
    
 
  ],
 
} 
