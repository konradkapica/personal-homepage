import { ReposLoading } from "./ReposLoading"
import { ReposError } from "./ReposError"
import { Repositories } from "./Repositories"

export const Content = ({ status, repositories }) => { 
    switch (status) {
        case "initial":
            return null;
        case "loading":
            return <ReposLoading />;
        case "error":
            return <ReposError />;
        case "success":
            return <Repositories repositories={repositories} />;

        default:
            throw new Error(`incorrect status: ${status}`);
    }
}