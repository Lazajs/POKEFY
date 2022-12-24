import type { Stats as Type, Abilities } from 'types'
import ShownGameStats from '@/pages/pokemon/Stats'
import { CardSection, SectionName } from '@/pages/pokemon/styles'

export default function GameStats ({ stats, abilities }: {stats: Type[], abilities: Abilities[]}) {
  return (
    <CardSection>
      <SectionName>Game Stats</SectionName>
      {
        stats.map(el => <ShownGameStats key={el.name} name={el.name}>{el.value}</ShownGameStats>)
      }
      <ShownGameStats name='Abilites'>{abilities.map(el => el.name)}</ShownGameStats>
    </CardSection>
  )
}
