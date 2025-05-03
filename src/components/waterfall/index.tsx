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
  winePng,
  videoDemo,
} from '../../assets'
import './index.css'

function generateItems ()  {
  return Array.from({ length: 10 }, (_, i) => {
   return {
     id: getRandom() as number + i,
     url: getRandom([bookPng, hanaPng, viewPng, tablePng, forestPng, flowerPng, paperPng, notePng, plantPng, winePng, videoDemo]),
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
    340: 1
  }

  function source(url) {
    if (url !== videoDemo) {
      return (
        <img src={url} alt='pics' loading='lazy' />
      )
    } else {
      return (
        <video autoPlay src={url} controls loop muted playsInline className='masonry-video'>
          Your browser does not support the video tag.
        </video>
      )
    }
  }

  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className='my-masonry-grid'
      columnClassName='my-masonry-grid_column'
    >
      {itemsArr.map(item => (
        <div key={item.id} className='masonry-item'>
          {source(item.url)}
          <div className='masonry-item-text'>{item.text}</div>
        </div>
      ))}
    </Masonry>
  )
}

export default Waterfall
