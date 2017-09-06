import Dexie from 'dexie'
import axios from 'axios'

const http = axios.create({ baseUrl: '/api' })

const db = new Dexie('cursor')
db.version(1).stores({
  edges: 'name, updated',
  events: 'id, startTime, endTime, name'
})

self.onconnect = ({ ports }) => {
  const [port] = ports

  port.onmessage = async ({ data }) => {
    const sendData = (result) => port.postMessage({ route: data, result })
    const sendError = (error) => port.postMessage({ error })
    const mergeChanges = async (edge, endpoint = edge, params) => {
      // Check the server for changes
      const { status, data } = await http.get(`mutations/${endpoint}`, { params })
      // If something changed
      if (status !== 304) {
        // Put updated and created documents into the offline database
        await db.events.bulkPut(data.updates)
        // Delete documents that were deleted while offline
        await db.events.bulkDelete(data.deletions)
        // Mark this edge as updated (we can probably get rid of this)
        await db.edges.update(edge, { updated: data.updated })
      }
    }

    switch (data) {
      case data === 'events/next':
        return db.events.where('endTime').aboveOrEqual(new Date().toISOString()).first()
        .then(sendData)
        .then(() => mergeChanges('events', 'events', { after: new Date().toISOString() }))
        .then(() => db.events.where('endTime').aboveOrEqual(new Date().toISOString()).first())
        .then(sendData)
        .catch(sendError)
        break;
    }
  }
}
