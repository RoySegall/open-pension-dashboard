import Page from "../../componenets/Page/Page";
import {Button, Form, Input, Section} from "../../componenets/Form/Form";
import {useRecoilValue} from "recoil";
import {loggedInUserState} from "../../state/authState";

export default () => {

  const user = useRecoilValue(loggedInUserState);

  const actions = <>
    <Button type="ok">Submit</Button>
    <Button type="error">Delete</Button>
  </>

  return <Page title="Users" activePage="users">
    <Form title="Adding a user" actions={actions}>
      <Section title="User Credentials">
        <Input title="Username" />
      </Section>
    </Form>
  </Page>
}
