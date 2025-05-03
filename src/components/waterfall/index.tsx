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

const itemsArr = Array.from({ length: 10 }, (_, i) => {
  return {
    id: i + 1,
    url: getRandom([bookPng, hanaPng, viewPng, tablePng, forestPng, flowerPng, paperPng, notePng, plantPng, winePng]),
    text: getRandom(100) as string
  }
})

function waterfall() {
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

export default waterfall
