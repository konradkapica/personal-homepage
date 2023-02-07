import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledArticle, Icon, Header, SubHeader } from "./styled";
import { ReactComponent as Github } from "./github-portfolio.svg";
import { Content } from "./Content";
import { selectReposStatus, selectRepos, fetchRepos } from "../personalHomepageSlice";

const Portfolio = () => {
    const dispatch = useDispatch();

    const reposStatus = useSelector(selectReposStatus);
    const repositories = useSelector(selectRepos);

    useEffect(() => {
        dispatch(fetchRepos());
    }, [dispatch]);

    return (
        <>
            <StyledArticle>
                <Icon>
                    <Github />
                </Icon>
                <Header>Portfolio</Header>
                <SubHeader>My recent projects</SubHeader>
            </StyledArticle>

            <Content
                status={reposStatus}
                repositories={repositories}
            />
        </>
    );
};

export default Portfolio;