import * as React from "react"
import {Box, Button, ButtonGroup, Form, FormRow, FormField, TextInput} from "@nypl/design-system-react-components"

export default function PageContainer(){
    const handleSubmit = (e:  React.FormEvent<any>) => {
        console.log(e)
    }
    return <Box>
    <Form
        action="/end/point"
        gap="grid.l"
        id="form-id"
        method="get"
        onSubmit={handleSubmit}
    >
        <FormRow>
        <FormField>
            <TextInput
            id="book-search"
            isRequired
            labelText="Booksearch"
            />
        </FormField>
        <FormField>
        <ButtonGroup>
        <Button id="submit" alignSelf="end">
          Submit
        </Button>
        </ButtonGroup>
        </FormField>
        </FormRow>
        </Form>
      </Box>
}