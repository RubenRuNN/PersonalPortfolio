import {Box, Text, Badge} from '@mantine/core';
import classes from './WorkHistory.module.css';
import {BaseSection} from "../BaseSection/BaseSection";
import axians from '../../public/static/companies/axians.png';
import alpega from '../../public/static/companies/alpega.jpg';
import rolex from '../../public/static/companies/rolex.jpg';
import vpg from '../../public/static/companies/vpg.jpg';
import Image from "next/image";
import {randomId} from "@mantine/hooks";

interface Work {
    title: string;
    image: string;
    description: string;
    technologies: string[];
}

const data: Work[] = [
    {
        image: axians,
        title: 'Axians',
        description: 'Development of a ticketing and backoffice platform with the goal of selling bus tickets.',
        technologies: [
            'Java 11', 'Spring Boot', 'Hibernate', 'Liquibase', 'JUnit', 'RabbitMQ', 'PostgreSQL',
            'NodeJS', 'Angular', 'WebSockets', 'Typescript', 'Docker', 'Kubernetes',
        ],
    },
    {
        image: rolex,
        title: 'Rolex',
        description: 'Maintain an application for horologists to follow the best procedures to fix a rolex.',
        technologies: [
            'Java 11', 'Spring', 'Hibernate', 'PostgreSQL', 'NodeJS', 'HTML', 'CSS',
            'Typescript', 'Docker', 'Kubernetes', 'Helm', 'Graylog'
        ],
    },
    {
        image: vpg,
        title: 'Virtual Pro Gaming',
        description: 'Develop and maintain an web application for FIFA pro clubs competitions and social media.',
        technologies: [
            'Python', 'FastAPI', 'ReactJS', 'PostgreSQL', 'NodeJS', 'HTML', 'CSS',
            'Typescript', 'Docker', 'Kubernetes',
        ],
    },
    {
        image: alpega,
        title: 'Alpega',
        description: 'Develop and maintain an application for transports management.',
        technologies: [
            'Java 8 to Java 11', 'JEB', 'Struts', 'JSP', 'Hibernate', 'Oracle SQL', 'NodeJS', 'HTML', 'CSS', 'Docker',
        ],
    },
];

export function WorkHistory() {
    const jobs = data.map(({ image, title, description, technologies }) => (
        <div className={classes.item} key={title}>
            <Box className={classes.itemImage}>
                <Image src={image} width={350} alt={title} />
            </Box>
            <Box className={classes.itemDescription}>
                <Text fw={700} fz="lg" className={classes.itemTitle}>
                    {title}
                </Text>
                <Text fw={400} fz="md" color="dimmed">
                    {description}
                </Text>
                <Box>
                    {technologies.map((technology) =>
                        <Badge
                            key={randomId()}
                            className={classes.itemTechnology}
                            size="sm"
                        >
                            {technology}
                        </Badge>)}
                </Box>
            </Box>
        </div>
    ));

    return (
        <BaseSection title="Work History">
            {/*<Title className={classes.title} order={2}>*/}
            {/*    I know this <span className={classes.highlight}>but</span> I'm not limited to this*/}
            {/*</Title>*/}

            {/*<Container size={660} p={0}>*/}
            {/*    <Text c="dimmed" className={classes.description}>*/}
            {/*        This is currently my favourite tech stack. I use this on my own projects and I've used some of these on my work aswell.*/}
            {/*    </Text>*/}
            {/*</Container>*/}
            {jobs}
        </BaseSection>
    );
}
