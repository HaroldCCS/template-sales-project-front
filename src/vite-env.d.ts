/// <reference types="vite/client" />


interface ImportMetaEnv {
  readonly VITE_SERVERLESS_URL: string
  readonly VITE_GENERATE_LINK_MODE_TEST: boolean
  readonly VITE_UPLOAD_FILE_FOLDER: string
  readonly VITE_DATA_MOCK: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}