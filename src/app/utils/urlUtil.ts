export const getParamsFromUrl = (paramsName: string) => {
  const urlString = window.location.href;
  const url = new URL(urlString);
  const paramValue = url.searchParams.get(paramsName);
  return paramValue;
};
