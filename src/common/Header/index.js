import { Wrapper, Image, Content } from "./styled";
import photo from "./Konrad_Kapica.jpg"

const Header = () => (
    <Wrapper>
        <Image src={photo} alt=""></Image>
        <Content>
            Konrad Kapica
        </Content>
    </Wrapper>
);

export default Header;