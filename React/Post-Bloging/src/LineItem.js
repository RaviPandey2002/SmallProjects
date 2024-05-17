import React from 'react'

const LineItem = ({ item }) => {
    const jsonItem = JSON.stringify(item)
  return (
    <li key={item.id}>
            {jsonItem}
          </li>
  )
}

export default LineItem