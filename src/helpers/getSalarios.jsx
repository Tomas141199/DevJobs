export const getSalarios = async () => {
  const url = `${
    import.meta.env.VITE_URL_BACKEND
  }/dev/webresources/entidades.salarios`;
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
