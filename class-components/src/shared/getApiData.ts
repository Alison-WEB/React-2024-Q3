const url = 'https://stapi.co/api/v2/rest/astronomicalObject/search?';
const endpoint = 'pageNumber=1&pageSize=7'


async function getApiData() {
  const response = await fetch(`${url}${endpoint}`, {
    method: 'GET',
    headers: {
      accept: `application/json`,
    },
  });
  const data = await response.json();
  return data.astronomicalObjects;
}

export default getApiData;
