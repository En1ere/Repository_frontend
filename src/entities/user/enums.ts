export type UserId = string;

export const enum Statuses {
  PENDING = 'pendingVerification',
  ACTIVE = 'active',
  LOCKED = 'locked',
  DELETION = 'deletionPending'
}
