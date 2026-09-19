import { useContext } from 'react'
import { QueueContext } from './queueContext'

export function useQueue() {
  return useContext(QueueContext)
}
