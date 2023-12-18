import { User } from "../types";

/**
 * This array simulates a database consisting of a list of users.
 * After signing up with your auth solution (e.g. GitHub, Auth0)
 * place your user info in an object, with the email address you used
 * as the id.
 * The groupIds are the names of the groups the user is part of.
 * Group info is in /data/groups.ts
 */
export const users: Omit<User, "color">[] = [

  {
    id: "kenneth.courtney@gmail.com",
    name: "Kenneth Courtney",
    avatar: "https://yt3.ggpht.com/yti/AGOGRCqvOSPbqfydu-3qLMH9J9i6_qmA_WUwPyquj5EUf3E=s88-c-k-c0x00ffffff-no-rj",
    groupIds: ["product", "engineering", "design"],
  },
  {
    id: "tylersuzanne84@gmail.com",
    name: "Tyler Suzanne",
    avatar: "https://liveblocks.io/avatars/avatar-2.png",
    groupIds: ["product", "engineering", "design"],
  },
  {
    id: "billthecat1022@gmail.com",
    name: "Ronald Courtney",
    avatar: "https://liveblocks.io/avatars/avatar-3.png",
    groupIds: ["product", "engineering", "design"],
  },
  {
    id: "NolanSSmith@msn.com",
    name: "Nolan Smith",
    avatar: "https://liveblocks.io/avatars/avatar-4.png",
    groupIds: ["product", "engineering", "design"],
  },
  {
    id: "luvratnakumar@gmail.com",
    name: "Uma Venkata Lekkala",
    avatar: "https://liveblocks.io/avatars/avatar-5.png",
    groupIds: ["product", "engineering", "design"],
  },
  {
    id: "junaidmohiyuddin886@gmail.com",
    name: "Junaid Mohiyuddin",
    avatar: "https://liveblocks.io/avatars/avatar-6.png",
    groupIds: ["product", "engineering", "design"],
  },
];
