 import * as React from "react";
 import { Box, Card, CardHeading, CardContent } from "@nypl/design-system-react-components"

export type Recommendation = {
    metadata: any;
    pageContent: string;
 }

export interface RecommendationsProps {
    recomendations: Recommendation[];
}

 const Recommendations = ( {recomendations}: RecommendationsProps) => {
 return <Box as="ol">
    {recomendations.map(rec => 
        <Box as="li" key={rec.metadata.ISBN} p="s">
            <Card>
                <CardHeading subtitle={`by ${rec.metadata.Author}`}>{rec.metadata.Title}</CardHeading>
                <CardContent>{rec.pageContent}</CardContent>
            </Card>
        </Box>
    )}
    </Box>
}
export default  Recommendations;