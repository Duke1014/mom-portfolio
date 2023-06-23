import React, { useEffect } from 'react'

export default function Painting({ number }) {

    useEffect(() => {
        fetch("http://localhost:3000/paintings")
        .then((r) => r.json()).then((data) => {
            console.log(data)
        })
    }, [])

  return (
    <div>
        
    </div>
  )
}
