import { CardSection, SectionName } from '@/pages/pokemon/styles'
import ShownInfoStats from '@/pages/pokemon/Stats'

type Props = {
  weight: number
  height: number
  order: number
  shape: string
  habitat: string
  generation: string
}

export default function Information ({ weight, height, order, generation, habitat, shape } : Props) {
  return (
    <CardSection>
      <SectionName>Information</SectionName>
      <ShownInfoStats name='weight' > {weight} </ShownInfoStats>
      <ShownInfoStats name='height'> {height} </ShownInfoStats>
      <ShownInfoStats name='order'> {order} </ShownInfoStats>
      {
        generation && habitat && shape
          ? (
          <>
            <ShownInfoStats name='generation'>{generation}</ShownInfoStats>
            <ShownInfoStats name='habitat'>{habitat}</ShownInfoStats>
            <ShownInfoStats name='shape'>{shape}</ShownInfoStats>
          </>
            )
          : ''
      }
    </CardSection>
  )
}
