export const getCategories = async () => {
  const url = `${
    import.meta.env.VITE_URL_BACKEND
  }/dev/webresources/entidades.categorias`;
  const resp = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const data = await resp.json();

  return data;
};
