
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
