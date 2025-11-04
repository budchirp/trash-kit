import type { TrashContext } from '@/types/trash'

export class Trash {
  context: TrashContext

  constructor(
    context: TrashContext = {
      apiUrl: process.env.API_URL || 'http://localhost:8080'
    }
  ) {
    this.context = context
  }
}
