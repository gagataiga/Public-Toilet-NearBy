import L from "leaflet";
export const checkDistance = (from,to) => { 
  if (from.lat && from.lng) {
    const latlng1 = L.latLng(from.lat, from.lng);
    const latlng2 = L.latLng(to.lat, to.lng);
    const distance = latlng1.distanceTo(latlng2) ;
    if (distance < 2) {
      return true;
    } 
  }
  return false;
}