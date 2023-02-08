import { ReactComponent as Github } from "./icons/github_LM.svg";
import { ReactComponent as Facebook } from "./icons/facebook_LM.svg";
import { ReactComponent as Instagram } from "./icons/instagram_LM.svg";
import { ReactComponent as Linkedin } from "./icons/linkedin_LM.svg";
import { Wrapper, SubHeader, Header, Info, Container, Link } from "./styled";
import { email } from "../email";

const Footer = () => (
    <>
        <Wrapper>
            <SubHeader >Let's talk!</SubHeader >
            <Header href={`mailto:${email}`}>{email}</Header>
            <Info>
                I'm always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to conatct me 🤞
            </Info>
        </Wrapper>
        <Container>
            <Link target="_blank" rel="noreferrer" href="https://github.com/Rudolfini">
                <Github />
            </Link>
            <Link target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/konrad-kapica-728529242/">
                <Linkedin />
            </Link>
            <Link target="_blank" rel="noreferrer" href="https://www.facebook.com/konrad.kapica.3">
                <Facebook />
            </Link>
            <Link target="_blank" rel="noreferrer" href="https://www.instagram.com/konradkapica/">
                <Instagram />
            </Link>
        </Container>
    </>
);

export default Footer;