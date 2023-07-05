import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion: "2023-06-01",
  dataset: "production",
  projectId,
  useCdn,
})
