import { StyledArticle, Icon, Header, SubHeader } from "./styled";
import { ReactComponent as Github } from "./github-portfolio.svg"
import { ReposError } from "./Repositories/ReposError";

const Portfolio = () => (
    <>
        <StyledArticle>
            <Icon>
                <Github />
            </Icon>
            <Header>Portfolio</Header>
            <SubHeader>My recent projects</SubHeader>
        </StyledArticle>

        <ReposError />
    </>
);

export default Portfolio;