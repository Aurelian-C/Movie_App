import { TIMEOUT_FETCH } from './Config';

export const promiseDelay = function (seconds) {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
};

const timeout = function (seconds) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(
        new Error(`Faild to fetch! Request took to long (${seconds} seconds)!`)
      );
    }, seconds * 1000);
  });
};

export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);
    const request = await Promise.race([fetchPro, timeout(TIMEOUT_FETCH)]);
    const data = await request.json();
    return data;
  } catch (err) {
    throw err;
  }
};
