import {
    Container,
    Title,
    Description,
    LinkContainer,
    Text,
    StyledLink,
    Wrapper
} from "./styled";

export const Repositories = ({ repositories }) => {

    return (
        <Wrapper>
            <Container>
                    <Title>Movies Browser</Title>
                    <Description>Website built during group project according to a project designed in Figma. Working in Scrum. Content based on themoviedb.org API.</Description>
                    <LinkContainer>
                        <Text>Demo:</Text>
                        <StyledLink target="_blank" href={"https://adriansacha.github.io/movies-browser/"}>Visit page</StyledLink>
                    </LinkContainer>
                    <LinkContainer>
                        <Text>Code:</Text>
                        <StyledLink target="_blank" href={"https://github.com/adrianSACHA/movies-browser"}>Browse repository</StyledLink>
                    </LinkContainer>
                </Container>
            {repositories.map(({ id, name, description, html_url, homepage }) => (
                <Container key={id}>
                    <Title>{name}</Title>
                    <Description>{description}</Description>
                    <LinkContainer>
                        <Text>Demo:</Text>
                        <StyledLink target="_blank" href={homepage}>Visit page</StyledLink>
                    </LinkContainer>
                    <LinkContainer>
                        <Text>Code:</Text>
                        <StyledLink target="_blank" href={html_url}>Browse repository</StyledLink>
                    </LinkContainer>
                </Container>
            ))}
        </Wrapper>
    );
};