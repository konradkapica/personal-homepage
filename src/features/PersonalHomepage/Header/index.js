import { 
    Wrapper, 
    Image, 
    Content, 
    SubHeader, 
    Name, 
    Info, 
    MailButton, 
    Message 
} from "./styled";
import photo from "./images/Konrad_Kapica.jpg"

const Header = () => (
    <Wrapper>
        <Image src={photo} alt=""></Image>
        <Content>
            <SubHeader>This is</SubHeader>
            <Name>Konrad Kapica</Name>
            <Info>
            👨🏻‍💻  I'm a passionate Frontend Developer in love with React, currently looking for new job opportunities.
            </Info>
            <MailButton>
                <Message />
                Hire me
            </MailButton>
        </Content>
    </Wrapper>
);

export default Header;