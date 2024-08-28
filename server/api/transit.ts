import GtfsRealtimeBindings from 'gtfs-realtime-bindings'

const url = "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs";

export default defineEventHandler(async (event) => {
  const buffer = await $fetch<ArrayBuffer>(url, { responseType: 'arrayBuffer' })

  const feed = GtfsRealtimeBindings.transit_realtime.FeedMessage.decode(
    new Uint8Array(buffer),
  )

  // const routeId = "6";

  return feed.entity;
  // return feed.entity.filter(entity => entity.vehicle && entity.vehicle.trip?.routeId === "6").map(entity => entity.vehicle);
})
