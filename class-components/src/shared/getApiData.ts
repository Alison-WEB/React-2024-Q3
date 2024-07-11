const api = 'https://stapi.co/api/v2/rest/astronomicalObject/search?';
const endpoint = 'pageSize=7';

async function getApiData(search?: string) {
  let url = '';
  if (search) {
    url = `${api}name=${search}&${endpoint}`;
  } else {
    url = `${api}${endpoint}`;
  }
  const response = await fetch(`${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  if (!response.ok) {
    throw new Error("Network response wasn't ok");
  }
  const data = await response.json();
  return data.astronomicalObjects;
}

export default getApiData;
