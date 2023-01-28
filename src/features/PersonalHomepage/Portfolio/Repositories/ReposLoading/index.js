import { WrapperLoading, TextLoading, Spinner } from "./styled";

export const ReposLoading = () => (
    <WrapperLoading>
        <TextLoading>Please wait, projects are being loaded...</TextLoading>
        <Spinner />
    </WrapperLoading>
);