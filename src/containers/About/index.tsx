import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GitHubSection } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>About me</Title>
    <Paragraph type="secondary">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
      nostrum, officiis in voluptatum hic debitis totam nam accusamus similique
      libero quaerat perspiciatis ratione fuga atque ipsam ab nihil laudantium
      sint.
    </Paragraph>
    <GitHubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=milacirne&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=milacirne&layout=compact&langs_count=7&theme=dracula" />
    </GitHubSection>
  </section>
)

export default About
