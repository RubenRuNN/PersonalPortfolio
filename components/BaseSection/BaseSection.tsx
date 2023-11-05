import {Container, Text} from '@mantine/core';
import classes from './BaseSection.module.css';

export function BaseSection({title, children}) {

    return (
        <Container size={700} className={classes.wrapper}>
            <Text className={classes.supTitle}>{ title }</Text>
            { children }
        </Container>
    );
}
