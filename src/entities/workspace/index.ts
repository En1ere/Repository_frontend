import {
  InvitationStatus,
  type WorkspaceId,
  WorkspaceType,
  WorkspaceUserRole
} from "@/entities/workspace/enums.ts";
import type {CatalogEntityId} from "@/entities/catalog/enums.ts";
import type {UserId} from "@/entities/user/enums.ts";

export interface Workspace {
  id: WorkspaceId
  type: WorkspaceType
  name: string
  createdAt: string
  updatedAt: string
  archivedAt: string
  items: CatalogEntityId[]
}

export interface Membership {
  workspaceId: WorkspaceId
  role: WorkspaceUserRole
  joinedAt: string
}

export interface Invitation {
  id: string,
  workspaceId: WorkspaceId
  email: string
  role: 'member'
  invitedBy: UserId
  status: InvitationStatus
  expiresAt: string
}
