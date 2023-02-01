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
                        <StyledLink>{homepage}</StyledLink>
                    </LinkContainer>
                    <LinkContainer>
                        <Text>Code:</Text>
                        <StyledLink target="_blank" href={html_url}>{html_url}</StyledLink>
                    </LinkContainer>
                </Container>
            ))}
        </Wrapper>
    );

};