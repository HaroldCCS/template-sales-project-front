/// <reference types="vite/client" />


interface ImportMetaEnv {
  readonly VITE_UPLOAD_FILE_URL: string
  readonly VITE_UPLOAD_FILE_FOLDER: string
  readonly VITE_DATA_MOCK: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}