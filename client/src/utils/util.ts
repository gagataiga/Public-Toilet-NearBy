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

export const changeToMinutes = (seconds:number) => { 
    const minutes = Math.floor(seconds / 60);
    return minutes;
}

export const formatDistance = (distance: number) => {
  // when the user is within a radius of 2M of point x
  if (distance >= 1000) {
      const kilometers = (distance / 1000).toFixed(1);
      return `${kilometers} Km` 
  } else {
    return `${distance} m` ;
  }
}

export const dateFomatChange = (date: string) => { 
  const formattedDate = date.split('T')[0];
  return formattedDate;
}