import * as React from "react"
import {Box, Button, ButtonGroup, Form, FormRow, FormField, TextInput} from "@nypl/design-system-react-components"

export default function PageContainer(){
    const [searchTerm , setSearchTerm] = React.useState("");
    const handleSubmit = (e: React.FormEvent<any>) => {
        e.preventDefault();
    }
    return <Box>
    <Form
        gap="grid.l"
        id="form-id"
        onSubmit={handleSubmit}
    >
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
}