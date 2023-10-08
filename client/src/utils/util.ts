
export const generateUniqueFileName = () => {
  const randomString = Math.random().toString(36).substring(2, 8);
  const timestamp = Date.now();
  const fileName = `${randomString}-${timestamp}`;
  return fileName;
}
