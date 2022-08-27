export default function fetcher(url: string, data = undefined) {
  return fetch(`${window.location.origin}/api${url}`, {
    method: data ? 'POST': 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if(res.status > 399 && res.status < 200) {
      // throw a new error
      throw new Error('Error status!')
    }
    return res.json()
  })
}