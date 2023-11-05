import {Avatar, Button, Group, Text} from '@mantine/core';
import githubIcon from "../../public/static/icons/github.svg";

import classes from './UserHero.module.css';
import Image from "next/image";
import {BaseSection} from "../BaseSection/BaseSection";

export function UserHero() {
    return (
        <BaseSection>
            <Group className={classes.avatarName}>
                <Avatar
                    src='/static/ruben.jpg'
                    size={200}
                    radius={200}
                />
                <h1 className={classes.title}>
                    Hello, I'm{' '}
                    <Text component="span" className={classes.span} inherit>
                        Ruben
                    </Text>{' '}
                </h1>
            </Group>

            <Text className={classes.description} color="dimmed">
                I embarked on my journey in web development at the age of 14, driven by the sheer joy of witnessing my creations come to life on the screen. This passion led me to pursue a degree in computer science and kick-started my fullstack career.
            </Text>

            <Group className={classes.controls}>
                <Button
                    size="xl"
                    className={classes.control}
                    variant="gradient"
                    gradient={{ from: 'blue', to: 'cyan' }}
                >
                    Contact me
                </Button>

                <Button
                    component="a"
                    href="https://github.com/rubenrunn"
                    target="_blank"
                    size="xl"
                    variant="default"
                    className={classes.control}
                    leftSection={<Image src={githubIcon} width={25} alt="Github icon" />}
                >
                    GitHub
                </Button>
            </Group>
        </BaseSection>
    );
}
