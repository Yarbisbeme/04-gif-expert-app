let requestCount = 0; // Contador global de peticiones

export const getGifs = async (category) => {
  try {
    requestCount++; // Incrementa el contador
    console.log(`Peticiones realizadas: ${requestCount}`); // Verifica en la consola

    const apiKey = 'JosZ4s4Ye90a6XIhOUKkD5p2Xz1bPsUJ';
    const limit = 5;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(category)}&limit=${limit}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error fetching gifs: ${response.status} ${response.statusText}`);
    }

    const { data } = await response.json();

    return data.map((img) => ({
      id: img.id,
      title: img.title || 'No title available',
      url: img.images?.downsized_medium?.url || '',
    }));
  } catch (error) {
    console.error('Failed to fetch gifs:', error);
    return [];
  }
};
