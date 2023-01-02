import { auth, users, files, global } from './routes'

export const handlers = [...auth, ...users, ...files, ...global]

export const storybookHandlers = {
  auth,
  users,
  files,
}
