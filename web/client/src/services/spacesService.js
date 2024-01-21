import axios from 'axios';

const backendUrl = 'http://localhost:8080';

const getTables = async () => {
  let results = {};
  try {
    results = await axios.get(`${backendUrl}/tables`);
    return results.data;
  } catch (err) {
    console.log(err);
    return results;
  }
};

export { getTables };
