import { StyledTile, Title, StyledList, Item } from "./styled";

const Tile = ({ title }) => (
    <StyledTile>
        <Title>{title}</Title>
        <StyledList>
            <Item>Semantic & accessible HTML</Item>
            <Item>Responsive Web Design</Item>
            <Item>Teamwork</Item>
            <Item>Markdown</Item>
            <Item>Immutability</Item>
            <Item>CSS BEM convention</Item>
            <Item>CSS Grid</Item>
            <Item>CSS Flexbox</Item>
            <Item>React Router</Item>
            <Item>Redux-Saga</Item>
            <Item>Redux (Toolkit)</Item>
            <Item>React Hooks</Item>
            <Item>Error handling</Item>
            <Item>Working with API (fetch, axios)</Item>
            <Item>JavaScript: ES6+</Item>
            <Item>Promises, Async/Await</Item>
            <Item>GitHub Pull Requests & Review</Item>
            <Item>Trello</Item>
            <Item>Scrum</Item>
            <Item>NPM</Item>
            <Item>React</Item>
            <Item>Git</Item>
        </StyledList>
    </StyledTile>
);

export default Tile;