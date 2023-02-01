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
            {repositories.map(({ id, name, description, html_url }) => (
                <Container>
                    <Title key={id}>{name}</Title>
                    <Description>{description}</Description>
                    <LinkContainer>
                        <Text>Demo:</Text>
                        <StyledLink>link.do.czegoś-</StyledLink>
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