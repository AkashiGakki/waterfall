import Masonry from 'react-masonry-css';

import { bookPng, hanaPng, viewPng } from '../../assets'
import './index.css'

function waterfall() {
  const breakpointColumns = {
    default: 3,
    1100: 3,
    700: 2,
    400: 1
  }

  const items = [{
    id: 1,
    url: bookPng,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }, {
    id: 2,
    url: hanaPng,
    text: 'pics 2'
  }, {
    id: 3,
    url: viewPng,
    text: 'pics 3'
  }, {
    id: 4,
    url: hanaPng,
    text: 'pics 4'
  }, {
    id: 5,
    url: viewPng,
    text: 'pics 5'
  }, {
    id: 6,
    url: bookPng,
    text: 'pics 6'
  }]

  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className='my-masonry-grid'
      columnClassName='my-masonry-grid_column'
    >
      {items.map(item => (
        <div key={item.id} className='masonry-item'>
          <img src={item.url} alt='pics' loading='lazy' />
          <div className='masonry-item-text'>{item.text}</div>
        </div>
      ))}
    </Masonry>
  )
}

export default waterfall
