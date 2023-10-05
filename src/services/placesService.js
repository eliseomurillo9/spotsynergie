export const getPlaces = async () => {
  const places = await fetch(
    "https://651d4f3c44e393af2d59879c.mockapi.io/api/places"
  );
    const response = await places.json();

    return response
};
