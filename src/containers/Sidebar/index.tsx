import Title from '../../components/Title'
import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'

import { Description, ThemeButton, SidebarContainer } from './styles'

const Sidebar = () => (
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
      <ThemeButton>Change theme</ThemeButton>
    </SidebarContainer>
  </aside>
)

export default Sidebar
