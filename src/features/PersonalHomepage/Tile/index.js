import { StyledTile, Title, StyledList, Item, Bullet } from "./styled";

const Tile = ({ title, skills }) => (
    <StyledTile>
        <Title>{title}</Title>
        <StyledList>
            {skills.map((skill) => 
                <Item key={skill}>
                    <Bullet />
                    {skill}
                </Item>
            )}
        </StyledList>
    </StyledTile>
);

export default Tile;