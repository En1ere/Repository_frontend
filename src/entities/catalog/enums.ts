export type CatalogEntityId = string;
export type AttachmentId = string;
export type IdentifierId = string;
export type Tag = string;

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

export const enum EntityIdentifierType {
  QR = 'internalQr',
  BARCODE = 'barcode',
  DATAMATRIX = 'dataMatrix',
}

export const enum EntityState {
  OK = 'ok',
  GOOD = 'good',
  BAD = 'bad'
}
