import type {Statuses} from "@/entities/user/enums.ts";
import type {Membership} from "@/entities/workspace";

export type UserId = string;

export interface User {
  id: UserId
  displayName: string
  email: string
  emailVerification?: string
  status: Statuses
  createdAt: string
  updatedAt: string
  membership: Membership[]
}

export interface Auth {
  userId: UserId
  lockedUntil?: string
  passwordChangedAt: string
  failedAttempts: number
}
