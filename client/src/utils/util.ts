import L from "leaflet";

export const generateUniqueFileName = () => {
  const randomString = Math.random().toString(36).substring(2, 8);
  const timestamp = Date.now();
  const fileName = `${randomString}-${timestamp}`;
  return fileName;
}

export const validateInputs = (image: File | null, tags: number[], ratingValue: number, toiletFee: string, comment: string): boolean => {
  if (!image ||
    tags.length === 0 ||
    (ratingValue < 1 || ratingValue > 5) ||
    !toiletFee ||
    !comment) {
    return false;
  }
  
  return true;
}

export const checkDistance = (from: { lat: number | undefined, lng: number | undefined }, to: { lat: number, lng: number }):number | undefined => { 
  if (from.lat && from.lng) {
    const latlng1 = L.latLng(from.lat, from.lng);
    const latlng2 = L.latLng(to.lat, to.lng);
    const distance = latlng1.distanceTo(latlng2) ;
    console.log(distance);
    return distance;
  }

  return undefined;
}

export const changeToMinutes = (seconds:number) => { 
    const minutes = Math.floor(seconds / 60);
    return minutes;
}

export const formatDistance = (distance: number) => {
  if (distance >= 1000) {
      const kilometers = (distance / 1000).toFixed(1);
      return `${kilometers} Km` 
  } else {
    return `${distance} m` ;
  }
}