export const enum CatalogEntityKind {
  PLACE= 'place',
  CONTAINER= 'container',
  ITEM= 'item',
}

export const enum CatalogEntityStatus {
  ACTIVE = 'active',
  LOANED = 'loaned',
  LOST = 'lost',
  WRITTENOFF = 'writtenOff',
}

export const enum AttachmentStatus {
  UPLOADING = 'uploading',
  PROCESSING = 'processing',
  READY = 'ready',
  FAILED = 'failed',
  DETACHED = 'detached'
}
