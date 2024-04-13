import React, {useState} from 'react'
import Cards from './Cards'
import Footer from "./Footer"

export default function Search() {
  const [searchText, setSearchText] = useState("")

  return (
    <>
    <div>
        <div>
            <div className="flex flex-wrap">
                <Cards searchText={searchText}/>
            </div>
            <Footer/>
        </div>
    </div>
    </>
  )
}
