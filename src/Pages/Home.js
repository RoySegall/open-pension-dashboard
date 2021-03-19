import Page from "../componenets/Page/Page";
import StatsCard from "../componenets/StatsCard/StatsCard";
import "./Home.scss";

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

  </Page>
};
