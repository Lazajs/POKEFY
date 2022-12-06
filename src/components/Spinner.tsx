import { Spin } from './styles/index'

interface Style {
  style?: {}
}

export default function Spinner ({ style }: Style) {
  return <Spin style={style} className="lds-dual-ring"></Spin>
}
