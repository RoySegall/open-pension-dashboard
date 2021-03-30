import Page from "../../componenets/Page/Page";
import Files from "../../componenets/Files/Files";
import RoundedElement from "../../componenets/RoundedElement/RoundedElement";
import {Button, Input} from "../../componenets/Form/Form";
import "./Files.scss";

export default () => {
  return <Page
    title={"Files view"}
    topContent={
      <section className="filter-items">
        <RoundedElement>
          <Input title={"Filter by filename"} />
          <Input title={"Filter by status"} />
          <Button type={'info'}>Search</Button>
        </RoundedElement>
      </section>
    }>
    <Files
      isFrontpage={false}
      showPager={true}
      itemsPerPage={25}
    />
  </Page>
};
