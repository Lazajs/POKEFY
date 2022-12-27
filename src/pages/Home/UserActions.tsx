import { ActionWrapper, ActionEmphasis } from './styles'

export default function UserActions () {
  return (
    <ActionWrapper>
      <p><ActionEmphasis>Click</ActionEmphasis> to get description</p>
      <p><ActionEmphasis>Slide</ActionEmphasis> to get the full view</p>
      <p>Any annoying bug? <a href='https://github.com/Lazajs/POKEFY' target='_blank' rel="noreferrer"><ActionEmphasis>contribute</ActionEmphasis></a></p>
    </ActionWrapper>
  )
}
