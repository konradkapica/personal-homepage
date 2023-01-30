import { 
    Wrapper, 
    Image, 
    Content, 
    SubHeader, 
    Name, 
    Info, 
    Message 
} from "./styled";
import { ButtonLink } from "../ButtonLink";
import photo from "./images/Konrad_Kapica.jpg"
import { email } from "./email";

const Header = () => (
    <Wrapper>
        <Image src={photo} alt=""></Image>
        <Content>
            <SubHeader>This is</SubHeader>
            <Name>Konrad Kapica</Name>
            <Info>
            👨🏻‍💻  I'm a passionate Frontend Developer in love with React, currently looking for new job opportunities.
            </Info>
            <ButtonLink href={`mailto:${email}`}>
                <Message />
                Hire me
            </ButtonLink>
        </Content>
    </Wrapper>
);

export default Header;