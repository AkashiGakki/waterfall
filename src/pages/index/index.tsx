import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'

import { Waterfall } from '../../components'
import './index.scss'




export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Waterfall />
    </View>
  )
}
