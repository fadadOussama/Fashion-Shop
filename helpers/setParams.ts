export const setParams = (key: queryKeys, value: queryKeysValues) => {
  const searchParams = new URLSearchParams(window.location.search);

  const query = searchParams.get(key);

  if (query && query === value) {
    searchParams.delete(key);
  } else {
    searchParams.set(key, value);
  }

  return searchParams.toString();
};
