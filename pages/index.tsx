import {Container} from "@mantine/core";
import {UserHero} from "../components/UserHero/UserHero";
import {ColorSchemeToggle} from "../components/ColorSchemeToggle/ColorSchemeToggle";
import {TechStack} from "../components/FeaturedTechStack/FeaturedTechStack";
import {WorkHistory} from "../components/WorkHistory/WorkHistory";

export default function IndexPage() {
  return (
      <Container
          style={{
              position: 'relative',
              padding: 0
          }}
          fluid
      >
          <ColorSchemeToggle />
          <UserHero />
          <TechStack />
          <WorkHistory />
      </Container>
  );
}
