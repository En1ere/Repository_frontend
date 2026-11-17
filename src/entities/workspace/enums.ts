export type WorkspaceId = string;

export const enum WorkspaceType {
  PERSONAL = 'personal',
  SHARED = 'shared'
}

export const enum WorkspaceUserRole {
  OWNER = 'owner',
  MEMBER = 'member'
}

export const enum InvitationStatus {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  DECLINED = 'declined',
  REVOKED = 'revoked',
  EXPIRED = 'expired',
}
