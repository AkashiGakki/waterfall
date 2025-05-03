import { useEffect, useState } from 'react';
import Taro,{ usePullDownRefresh, useReachBottom } from '@tarojs/taro'
import Masonry from 'react-masonry-css';

import { getRandom } from '@/helpers';
import {
  bookPng,
  hanaPng,
  viewPng,
  tablePng,
  forestPng,
  flowerPng,
  paperPng,
  notePng,
  plantPng,
  winePng
} from '../../assets'
import './index.css'

function generateItems ()  {
  return Array.from({ length: 10 }, (_, i) => {
   return {
     id: getRandom() as number + i,
     url: getRandom([bookPng, hanaPng, viewPng, tablePng, forestPng, flowerPng, paperPng, notePng, plantPng, winePng]),
     text: getRandom(100) as string
   }
 })
}

function Waterfall() {
  const [itemsArr, setItemsArr] = useState(generateItems())

  usePullDownRefresh(() => {
    console.log('Pull down to refresh.')
    Taro.startPullDownRefresh()
    setTimeout(() => {
      Taro.stopPullDownRefresh()
      const items = generateItems()
      setItemsArr(items)
    }, 1000)
  })

  useReachBottom(() => {
    console.log('onReachBottom')
    const items = generateItems()
    setItemsArr([...itemsArr, ...items])
  })

  // useEffect(() => {
  //   console.log('Waterfall component effect')
  // }, [itemsArr])

  const breakpointColumns = {
    default: 3,
    1100: 3,
    700: 2,
    400: 1
  }

  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className='my-masonry-grid'
      columnClassName='my-masonry-grid_column'
    >
      {itemsArr.map(item => (
        <div key={item.id} className='masonry-item'>
          <img src={item.url} alt='pics' loading='lazy' />
          <div className='masonry-item-text'>{item.text}</div>
        </div>
      ))}
    </Masonry>
  )
}

export default Waterfall
