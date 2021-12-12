import React from 'react';

export default function Book({src, title, authors, year, tags}) {
  return (<div style={{width: '250px', height: '220px', paddingRight: '6px'}}>
    <img width="100px" src={src} alt={title} />
    <div>{title}</div>
    {/* {authors?.length ? <div style={{fontSize: '0.8rem'}}>{authors.join(' ')}</div> : null}
    {year ? <div style={{fontSize: '0.8rem'}}>{year}</div> : null} */}
  </div>
  )
}
