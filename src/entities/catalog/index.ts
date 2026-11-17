import {
  type AttachmentId,
  AttachmentStatus,
  type CatalogEntityId,
  CatalogEntityKind,
  CatalogEntityStatus,
  EntityIdentifierType,
  EntityState,
  type IdentifierId,
  type Tag
} from "@/entities/catalog/enums.ts";
import type {WorkspaceId} from "@/entities/workspace/enums.ts";
import type {UserId} from "@/entities/user/enums.ts";

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
  identifiers: CatalogEntityIdentifier[]
  tags: Tag[]
  state: EntityState
  //   todo fields specification 7.3-7.5
}

export interface Attachment {
  id: AttachmentId
  workspaceId: WorkspaceId
  entityId: CatalogEntityId
  kind: string
  size: number
  status: AttachmentStatus
}

export interface CatalogEntityIdentifier {
  id: IdentifierId
  entityId: CatalogEntityId
  type: EntityIdentifierType
  value: string
  createdAt: string
}
