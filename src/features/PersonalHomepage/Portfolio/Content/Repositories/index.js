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