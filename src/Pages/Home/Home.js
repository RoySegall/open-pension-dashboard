import Page from "../../componenets/Page/Page";
import StatsCard from "../../componenets/StatsCard/StatsCard";
import "./Home.scss";
import RoundedElement from "../../componenets/RoundedElement/RoundedElement";
import Table from "../../componenets/Table/Table";
import Status from "../../componenets/Status/Status";
import Pager from "../../componenets/Pager/Pager.js"
import TextWithActions from "../../componenets/TextWithActions/TextWithActions";
import {File, Database, Clock, Tasks} from "../../Icons/Icons";

const TopContent = () => {
  return <div className="stats-wrapper">
    <StatsCard
      title="Uploaded files"
      mainStat="120"
      gradColor="orange"
      icon={<File />}
    />

    <StatsCard
      title="Data amount"
      mainStat="1GB"
      gradColor="red"
      icon={<Database />}
    />

    <StatsCard
      title="Files in queue"
      mainStat="100"
      gradColor="teal"
      icon={<Clock />}
    />

    <StatsCard
      title="Files to approve"
      mainStat="21"
      gradColor="green"
      icon={<Tasks />}
    />
  </div>
}

export default () => {

  const editHandler = () => console.log('Edit');

  return <Page title={"Home"} topContent={<TopContent />}>
    <RoundedElement>
      <Table
        title="Recent uploaded files"
        headers={['Filename', 'Status', 'Storage ID']}
        rows={[
          [
            'foo.png',
            <Status status='ok'>Processed</Status>,
            <TextWithActions actions={[
              {title: 'Edit', handler: editHandler},
              {title: 'Delete', handler: editHandler},
            ]}>1234</TextWithActions>
          ],
          ['foo.png', <Status status='error'>Failed</Status>, '1234'],
          ['foo.png', <Status status='warning'>Processes with errors</Status>, '1234'],
          ['foo.png', <Status status='info'>Stored</Status>, '1234'],
        ]}
        navigationButton={"/files/uploaded"}
        pager={<Pager />}
      >
      </Table>
    </RoundedElement>

    <RoundedElement>
      <Table
        title="Recent uploaded files"
        headers={['Filename', 'Status', 'Storage ID']}
        rows={[
          [
            'foo.png',
            <Status status='ok'>Processed</Status>,
            <TextWithActions actions={[
              {title: 'Edit', handler: editHandler},
              {title: 'Delete', handler: editHandler},
            ]}>1234</TextWithActions>
          ],
          ['foo.png', <Status status='error'>Failed</Status>, '1234'],
          ['foo.png', <Status status='warning'>Processes with errors</Status>, '1234'],
          ['foo.png', <Status status='info'>Stored</Status>, '1234'],
        ]}
        navigationButton={"/files/uploaded"}
        pager={<Pager />}
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
