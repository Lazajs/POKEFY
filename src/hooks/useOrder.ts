type RawSprites = {
  back_default: string,
  back_shiny: string,
  front_default: string,
  front_shiny: string
}

type RawStats = {
  base_stat: number,
  stat: {name: string}
}

type RawTypes = {
  type: {
    name: string
  }
}

type RawAbility = {
  ability: {
    name: string,
    url: string
  }
}

type RawSpecies = {
  name: string,
  url: string
}

interface RawInformation {
  sprites: RawSprites
  stats: RawStats[],
  types: RawTypes[],
  weight: number,
  height: number,
  order: number,
  abilities: RawAbility[]
  species: RawSpecies
}

export default function useOrder () {
  const order = ({ sprites, stats, types, weight, height, order, abilities, species }: RawInformation) => {
    if (!sprites?.back_default) return ''
    const { back_default, back_shiny, front_default, front_shiny } = sprites

    const allStats = stats.map(el => {
      return { name: el.stat.name, value: el.base_stat }
    })

    const allTypes = types.map(el => {
      return el.type.name
    })

    const allAbilities = abilities.map(el => {
      return {
        name: el.ability.name,
        url: el.ability.url
      }
    })

    const RESULT = {
      name: species.name,
      sprites: { back: back_default, front: front_default, frontShiny: front_shiny, backShiny: back_shiny },
      stats: allStats,
      types: allTypes,
      weight,
      height,
      order,
      abilities: allAbilities,
      species: {
        url: species.url
      }
    }

    return RESULT
  }

  return order
}
