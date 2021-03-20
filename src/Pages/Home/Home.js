import Page from "../../componenets/Page/Page";
import StatsCard from "../../componenets/StatsCard/StatsCard";
import "./Home.scss";
import RoundedElement from "../../componenets/RoundedElement/RoundedElement";
import Table from "../../componenets/Table/Table";

const TopContent = () => {
  return <div className="stats-wrapper">
    <StatsCard
      title="Uploaded files"
      mainStat="120"
      gradColor="orange"
    />

    <StatsCard
      title="Data amount"
      mainStat="1GB"
      gradColor="red"
    />

    <StatsCard
      title="Files in queue"
      mainStat="100"
      gradColor="teal"
    />

    <StatsCard
      title="Files to approve"
      mainStat="21"
      gradColor="green"
    />
  </div>
}

export default () => {

  return <Page title={"Home"} topContent={<TopContent />}>
    <RoundedElement>
      <Table
        title="Recent uploaded files"
        headers={['Filename', 'Status', 'Storage ID']}
        rows={[
          ['foo.png', 'Stored', '1234']
        ]}
        navigationButton={"/files/uploaded"}
        pager={{baseRoute: "/files", pages: 12}}
      >
      </Table>
    </RoundedElement>

    {/*<RoundedElement>*/}
    {/*  Recent question to be asked*/}
    {/*</RoundedElement>*/}

    {/*<RoundedElement>*/}
    {/*  Recent events*/}
    {/*</RoundedElement>*/}
  </Page>
};
