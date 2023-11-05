import {Badge, Box, Container, Progress, SimpleGrid, Text, ThemeIcon, Title} from '@mantine/core';
import {Icon, IconBrandDocker, IconBrandJavascript, IconBrandNextjs, IconBrandReact} from '@tabler/icons-react'
import classes from './FeaturedTechStack.module.css';
import {BaseSection} from "../BaseSection/BaseSection";

interface Technology {
    title: string;
    icon: Icon;
    skill: number;
}

const data: Technology[] = [
    {
        icon: IconBrandReact,
        title: 'ReactJS',
        skill: 90,
    },
    {
        icon: IconBrandNextjs,
        title: 'NextJS',
        skill: 30,
    },
    {
        icon: IconBrandDocker,
        title: 'Docker',
        skill: 60,
    },
    {
        icon: IconBrandJavascript,
        title: 'Javascript',
        skill: 90,
    },
];

export function TechStack() {
    const items = data.map(({ icon: Icon, title, skill }) => (
        <div className={classes.item} key={title}>
            <ThemeIcon variant="light" className={classes.itemIcon} size={60} radius="md">
                <Icon  />
            </ThemeIcon>

            <Box style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                <Text fw={700} fz="lg" className={classes.itemTitle}>
                    {title}<Badge size="xs">Intermediate</Badge>
                </Text>
                <Progress size="sm" value={skill} />
            </Box>
        </div>
    ));

    return (
       <BaseSection title="Tech Stack">
          <Title className={classes.title} order={2}>
              I know this <span className={classes.highlight}>but</span> I'm not limited to this
          </Title>

          <Container size={660} p={0}>
              <Text c="dimmed" className={classes.description}>
                  This is currently my favourite tech stack. I use this on my own projects and I've used some of these on my work aswell.
              </Text>
          </Container>

          <SimpleGrid cols={{ base: 1, xs: 2 }} spacing={50} mt={30}>
              {items}
          </SimpleGrid>
       </BaseSection>
    );
}
