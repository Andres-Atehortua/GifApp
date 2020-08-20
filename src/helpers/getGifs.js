const getGifs = async (category) => {
  const apiKey = "cNSyia1jMQVYcmKIgsWqYb5yt8M5Zif1";
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=${apiKey}`;
  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map(({ id, title, images }) => ({
    id,
    title,
    url: images.downsized_medium.url,
  }));
  return gifs;
};

export default getGifs;
