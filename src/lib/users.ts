"use client";
import { User } from "../types/User";
import { useState } from "react";

export const usersData: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "user@example.com",
    password: "$2a$10$GyV4y3rStulmTOR1EvytkOSrG08lqUWJVJHja4IpJPCSGncXChQ0u", // Replace with actual hashed password
    githubId: null,
    role: "admin",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "users@example.com",
    password: "$2a$10$GyV4y3rStulmTOR1EvytkOSrG08lqUWJVJHja4IpJPCSGncXChQ0u", // Replace with actual hashed password
    githubId: null,
    role: "editor",
  },
];

let users: User[];
let setUsers: React.Dispatch<React.SetStateAction<User[]>>;

function UpdateUsers() {
  [users, setUsers] = useState(usersData);
}

UpdateUsers();
export { users, setUsers };
