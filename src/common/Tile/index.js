import { StyledTile, Title, StyledList, Item } from "./styled";

const Tile = ({ title, skills }) => (
    <StyledTile>
        <Title>{title}</Title>
        <StyledList>
            {skills.map((skill) => 
                <Item key={skill}
                >{skill}
                </Item>
            )}
        </StyledList>
    </StyledTile>
);

export default Tile;