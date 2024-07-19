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

import { Recommendation } from "./Recommendations";

interface SearchFormProps {
  setRecommendations: React.Dispatch<React.SetStateAction<Recommendation[]| null>>;
}

export default function SearchForm({setRecommendations}: SearchFormProps) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleSubmit = async (e: React.FormEvent<any>) => {
    e.preventDefault();
    const recommendations = await similaritySearch(searchTerm);

    setRecommendations(recommendations);
  };
  return (
    <Box p="s">
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
