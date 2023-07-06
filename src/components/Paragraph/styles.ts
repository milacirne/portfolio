import styled from 'styled-components'
import { Props } from '.'

export const Paragraph = styled.p<Props>`
  font-size: 14px;
  color: ${(props) => (props.type === 'main' ? '#282a35' : '#949494')};
  line-height: 22px;
`
