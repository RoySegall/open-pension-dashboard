import Page from "../../componenets/Page/Page";
import {Button, Form, Input, Section} from "../../componenets/Form/Form";
import {useState} from 'react';
import {uploadFile} from "../../state/api";
import {Redirect} from "react-router-dom";

export default () => {
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState();
  const [errors, setErrors] = useState({});
  const [redirect, setRedirect] = useState(false);

  if (redirect) {
    return <Redirect to={"/"} />
  }

  const handleSubmit = async () => {
    setErrors({});

    if (!file) {
      setErrors({errors, ...{file: 'You need to select a file'}})
      return;
    }

    setIsLoading(true);
    await uploadFile(file);
    setIsLoading(false);
    setRedirect(true);
  };

  return <Page title={"Adding file"}>
    <Form
      title={"Adding file"}
      actions={<Button type="ok" waiting={isLoading} onClick={() => handleSubmit()}>Submit</Button>}>
      <Section title="File">
        <Input type="file" onChange={(event) => {setFile(event.target.files[0])}} error={errors.file}/>
      </Section>
    </Form>
  </Page>
};
