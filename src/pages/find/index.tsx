import Taro, { useRouter } from '@tarojs/taro'
import { View } from '@tarojs/components'

import { Waterfall } from '../../components'
import './index.scss'

export default function Find() {
  const router = useRouter()
  const count: number = Number(router.params?.count) || 7
  console.log('Find page params:', router.params)

  return (
    <View className='find'>
      <Waterfall count={count} />
    </View>
  )
}
