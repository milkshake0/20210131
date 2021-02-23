//db에 저장하는 건 리액트와 분리
export const requestSignup = async (user) => {
  const response = await fetch('http://localhost:8000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })

  return response.ok
}
