import { useParams } from "react-router-dom";

const NovelsPage = () => {
    const { novelName, chapterNumber } = useParams();
    return (
        <div>
            {novelName} {chapterNumber}
        </div>
    );
}


export default NovelsPage;