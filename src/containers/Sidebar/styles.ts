import styled from 'styled-components'
import { Paragraph } from '../../components/Paragraph/styles'

export const Description = styled(Paragraph)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const ThemeButton = styled.button`
  font-size: 10px;
  font-weight: bold;
  padding: 8px;
  border-radius: 12px;
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};
  cursor: pointer;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
