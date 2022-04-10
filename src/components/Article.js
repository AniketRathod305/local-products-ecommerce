import React from 'react'
import './Article.css'
function Article({pagelink,imglink,title,desc}) {
  return (
    <div id="temp">
        <a href={pagelink}>
        <img className="tempimg" src={imglink}></img>
        <h2 id="temptitle">{title}</h2>
        <h5 id="tempdesc">{desc}</h5>
        </a>


    </div>
  )
}

export default Article