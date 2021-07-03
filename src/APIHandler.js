/* eslint-disable import/no-unresolved */
import 'regenerator-runtime/runtime';

const APIHandler = (() => {
  const myID = 'peQd10aVIzyQmZoVWY3p';
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${myID}/scores/`;

  const postData = async (dataObj) => {
    try {
      const response = await fetch(url, {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataObj),
      });
      return response.json();
    } catch (err) {
      return err;
    }
  };

  const getData = async () => {
    try {
      const response = await fetch(url);
      return response.json();
    } catch (err) {
      return err;
    }
  };

  return { postData, getData };
})();

export default APIHandler;