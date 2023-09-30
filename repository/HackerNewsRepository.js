const baseUrl = 'https://hn.algolia.com/api/v1/search';

function dtoToNewsList(dto) {
  return dto.hits.map((h) => ({
    id: h.objectID,
    author: h.author,
    title: h.title,
    url: h.url,
  }));
}

async function getAll() {
  const response = await fetch(baseUrl);
  const dto = await response.json();
  const newsList = dtoToNewsList(dto);
  return newsList;
}

async function search(query) {
  const response = await fetch(`${baseUrl}?query=${query}`);
  const dto = await response.json();
  const newsList = dtoToNewsList(dto);
  return newsList;
}

export default {
  getAll,
  search,
};
