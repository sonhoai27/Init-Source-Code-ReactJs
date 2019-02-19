import * as React from 'react';
import { connect } from 'react-redux';

import { sourcesSelector } from '@app/stores/sources/SourceSelectors';
import { actionGetSources } from '@app/stores/sources/SourceActions';
import List from './components/List';

const S = require('./Home.scss')

interface IHomeScreenProps {
  sourcesState: any;
  actionGetSources: () => void;
}

class HomeScreen extends React.Component<IHomeScreenProps> {
  constructor (props) {
    super(props)
  }

  componentDidMount() {
    this.props.actionGetSources()
  }

  render() {
    const {
      sourcesState,
    } = this.props

    return (
      <ul className={S['home']}>
        <List
          list={sourcesState.get('sources') ? sourcesState.get('sources').toJS() : []}/>
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  sourcesState: sourcesSelector(state.sourceReducer),
})

const mapActionToProps = ({
  actionGetSources,
})

export default connect(mapStateToProps, mapActionToProps)(HomeScreen)
