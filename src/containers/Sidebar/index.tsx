import Title from '../../components/Title'
import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'

import { Description, ThemeButton, SidebarContainer } from './styles'

type Props = {
  changeTheme: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Camila Cirne</Title>
      <Paragraph type="secondary" fontSize={16}>
        @milacirne
      </Paragraph>
      <Description type="main" fontSize={12}>
        Front-end Developer
      </Description>
      <ThemeButton onClick={props.changeTheme}>Change theme</ThemeButton>
    </SidebarContainer>
  </aside>
)

export default Sidebar
