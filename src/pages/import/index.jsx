// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Columns, Section } from 'react-bulma-components';
import Events from '../../core/events';
import Layout from '../../components/Layout/Layout';
import Overview from '../dashboard/Overview';
import ImportFolders from '../dashboard/ImportFolders';
import ImportFolderSeries from './ImportFolderSeries';

type Props = {
  load: () => void,
}

class ImportFoldersPage extends React.Component<Props> {
  componentDidMount() {
    const { load } = this.props;
    load();
  }

  render() {
    return (
      <Layout>
        <Section className="import-folders">
          <Overview />
          <Columns>
            <Columns.Column>
              <ImportFolders
                description="Location, Type, Provider and Status"
                className="col-sm-4"
              />
            </Columns.Column>
            <Columns.Column>
              <ImportFolderSeries className="col-sm-8" />
            </Columns.Column>
          </Columns>
        </Section>
      </Layout>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    load: () => dispatch({ type: Events.PAGE_IMPORT_FOLDERS_LOAD, payload: null }),
  };
}

export default connect(null, mapDispatchToProps)(ImportFoldersPage);
