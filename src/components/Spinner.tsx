import styled from 'styled-components'
interface Style {
  local?: string
  top?: string
}
export const Spin = styled.div<Style>`
  display: inline-block;
  width: 80px;
  height: 80px;
  position: ${props => props.local ? 'relative' : 'absolute'};
  left: 50%;
  top: 50%;
  margin-top: ${props => props.top ? props.top : '0'};
  transform: translate(-50%, -50%);
  
  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #f00;
    border-color: #f00 transparent #f00 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export default function Spinner ({ local, top }: Style) {
  return <Spin local={local} top={top} className="lds-dual-ring"></Spin>
}
