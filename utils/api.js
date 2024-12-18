const API_BASE_URL = "https://dogapi.dog/api/v2/";

export const getBreedsList = async () => {
  const response = await fetch(`${API_BASE_URL}breeds`);
  const data = await response.json();
  return data.data;
};

export const getBreedDetails = async (id) => {
  const response = await fetch(`${API_BASE_URL}breeds/${id}`);
  const data = await response.json();
  return data.data;
};
