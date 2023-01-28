import { WrapperError, IconError, HeaderError, InfoError } from "./styled";
import {ReactComponent as Danger} from "./iconError/Danger.svg"

export const ReposError = () => (
    <WrapperError>
        <IconError>
            <Danger />
        </IconError>
        <HeaderError>Ooops! Something went wrong... </HeaderError>
        <InfoError>Sorry, failed to load Github projects.<br/> You can check them directly on Github.</InfoError>
    </WrapperError>
);