import type {WorkspaceId} from "@/entities/workspace";
import {
  AttachmentStatus,
  CatalogEntityKind,
  CatalogEntityStatus
} from "@/entities/catalog/enums.ts";
import type {UserId} from "@/entities/user";

export type CatalogEntityId = string;
export type AttachmentId = string;

export interface CatalogEntity {
  id: CatalogEntityId
  workspaceId: WorkspaceId
  parentId?: WorkspaceId
  kind: CatalogEntityKind
  canContain: boolean
  name: string
  description?: string
  quantity?: number
  unit?: string
  status: CatalogEntityStatus
  sortOrder?: number
  createdBy: UserId
  archivedBy: UserId
  createdAt: string
  updatedAt: string
  archivedAt?: string
  attachments?: Attachment[]
}

export interface Attachment {
  id: AttachmentId
  workspaceId: WorkspaceId
  entityId: CatalogEntityId
  kind: string
  size: number
  status: AttachmentStatus
}
