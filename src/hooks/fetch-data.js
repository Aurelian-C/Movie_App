import React from 'react';

const API_KEY = '13a63a2e3653f6be0befa030e1a22ce6';
const API_URL = 'https://api.themoviedb.org/3/';
const IMAGES_PATH = 'https://image.tmdb.org/t/p/w500/';
const TIMEOUT_FETCH = 5; //5 seconds
const PROMISE_DELAY = 1; //1 second

const promiseDelay = function (seconds) {
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

const AJAX = async function (url, uploadData = undefined) {
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

const useFetchData = (category, mediaType, timeWindow) => {};

export default useFetchData;
