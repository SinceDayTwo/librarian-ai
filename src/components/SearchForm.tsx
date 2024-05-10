import * as React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Form,
  FormRow,
  FormField,
  TextInput,
} from "@nypl/design-system-react-components";
import { similaritySearch } from "../server/supabase";

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [recommendation, setRecommendation] = React.useState(null);
  const handleSubmit = async (e: React.FormEvent<any>) => {
    e.preventDefault();
    const recommendation = await similaritySearch(searchTerm);

    console.log("rec -->", recommendation);
    return recommendation;
  };
  return (
    <Box>
      <Form gap="grid.l" id="form-id" onSubmit={handleSubmit}>
        <FormRow>
          <FormField>
            <TextInput
              id="book-search"
              isRequired
              labelText="Booksearch"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </FormField>
          <FormField>
            <ButtonGroup>
              <Button id="submit" type="submit" alignSelf="end">
                Submit
              </Button>
            </ButtonGroup>
          </FormField>
        </FormRow>
      </Form>
    </Box>
  );
}
