import * as React from "react";
import SearchForm from "./SearchForm"
import Recommendations, {Recommendation} from "./Recommendations"

const PageContainer = () => {
    const [recommendations, setRecommendations] = React.useState<Recommendation[]|null>(null);

    return <div>
        <SearchForm setRecommendations={setRecommendations}/>
        {recommendations && <Recommendations recomendations={recommendations}/>}
        
        </div>
}

export default PageContainer;