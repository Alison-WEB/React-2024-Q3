const url = 'https://stapi.co/api/v2/rest/astronomicalObject/search?';
const endpoint = 'pageNumber=1&pageSize=10'


async function getApiData() {
  const response = await fetch(`${url}${endpoint}`, {
    method: 'GET',
    headers: {
      accept: `application/json`,
    },
  });
  const data = await response.json();
  console.log(data);
  return JSON.stringify(data);
}

export default getApiData;
