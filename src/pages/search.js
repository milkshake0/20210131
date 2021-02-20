import React, { useState, useEffect } from 'react'

import SearchBar from '../components/search/search-bar'
import SearchList from '../components/search/search-list'

function SearchPage() {
  const [keywords, setKeywords] = useState(
    JSON.parse(localStorage.getItem('keywords')) || '[]',
  )
  useEffect(() => {
    console.log('keywords', keywords)
    localStorage.setItem('keywords', JSON.stringify(keywords))
  }, [keywords])

  const handleAddKeyword = (keyword) => {
    //부모 컴포넌트에서 state를 바꿀 함수를 제공한다.
    //외부에서 이걸 발생시키는건 자식컴포넌트에서..
    //내 값을 바꾸는건 handle*, 외부의 값은 on*으로 시작되는 이름을 지음.
    console.log('keyword ', keyword)
    setKeywords([
      ...keywords,
      {
        id: Date.now(),
        text: keyword,
      },
    ])
  }

  const handleRemoveKeyword = (id) => {
    //filter로 삭제
    setKeywords(
      keywords.filter((keyword) => {
        return keyword.id !== id
      }),
    )
  }

  //2021.02.21 임의 작성
  const handleAllRemoveKeyword = () => {
    setKeywords([])
  }

  return (
    <div>
      <SearchBar onAddKeyword={handleAddKeyword} />
      <SearchList
        keywords={keywords}
        onRemoveKeyword={handleRemoveKeyword}
        onAllRemoveKeyword={handleAllRemoveKeyword}
      />
    </div>
  )
}

export default SearchPage
