interface ApiData {
  astronomicalObjectType: string;
  location: null | {
    uid: string,
    name: string,
  }
  name: string,
  uid: string
}

export default ApiData;
