import Paragraph from '../Paragraph'
import Title from '../Title'

import { Card, LinkButton } from './styles'

const Project = () => (
  <Card>
    <Title>Project name</Title>
    <Paragraph type="secondary">Description</Paragraph>
    <LinkButton>Preview</LinkButton>
  </Card>
)

export default Project
