const baseURL = 'http://jacklv.cn';
export default function request(url, options = {}) {
  if (options.method && options.method.toUpperCase() === 'POST') {
    options.body = JSON.stringify(options.body);
    options.headers = {
      'content-type': 'application/json',
    };
  }
  return fetch(baseURL + url, options)
    .then((res) => res.json())
    .then((res) => {
      if (res.code === 1) {
        return res.data;
      } else {
        return Promise.reject(res);
      }
    })
    .catch((err) => {
      console.log('接口错误', err);
    });
}
