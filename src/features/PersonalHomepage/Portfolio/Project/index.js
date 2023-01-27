import { Container, Title, Description, LinkContainer, Text, StyledLink, Wrapper } from "./styled";

export const Project = () => (
    <Wrapper>
        <Container>
            <Title>title</Title>
            <Description>Tutaj będzie tekst ściągnięty z interneyyTutaj będzie tekst ściągnięty z interneyyTutaj </Description>
            <LinkContainer>
                <Text>Demo:</Text>
                <StyledLink>link.do.czegoś-</StyledLink>
            </LinkContainer>
            <LinkContainer>
                <Text>Code:</Text>
                <StyledLink>lidk.do.czegoś</StyledLink>
            </LinkContainer>
        </Container>
        <Container>
            <Title>Movie</Title>
            <Description>
                Tutaj będzie tekst ściągnięty z interneyyTutaj będzie tekst ściągnięty z interneyyTutaj będzie tekst ściągnięty z interneyyTutaj będzie tekst ściągnięty z interneyyTutaj będzie tekst ściągnięty z interneyyTutaj będzie tekst ściągnięty z interneyy
            </Description>
            <LinkContainer>
                <Text>Demo:</Text>
                <StyledLink>link.do.czegoś-</StyledLink>
            </LinkContainer>
            <LinkContainer>
                <Text>Code:</Text>
                <StyledLink>lidk.do.czegoś</StyledLink>
            </LinkContainer>
        </Container>
    </Wrapper>

);