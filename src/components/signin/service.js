//1. 유저 목록 불러오고
//2. 불러온 유저목록에서 입력받은 값 매칭 후 리턴

//파라미터로 user정보 해체할당해서 받음
export const fetchLogin = async (loginInfo) => {
  const response = await fetch('http://localhost:8000/users')

  if (response.ok) {
    const users = await response.json()

    const user = users.find((user) => user.email === loginInfo.email)

    //db에서 받은 값이랑 입력값이 맞지 않으면 종료
    if (!user || user.password !== loginInfo.password) {
      return null
    }

    //user에서 password정보 제외하고 리턴하기 위해.
    const { email, name } = user
    return {
      email,
      name,
    }
  } else {
    return null
  }
}
