import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';


class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
  }

  static defaultProps = {
    children: <p>Defaultowy tekst, gdy nie ma opisu Listy. Jest zastępowany, gdy jest opis w komponencie List</p>,
  }
  

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} />
        <div className={styles.description}>
          {this.props.children}
        </div>

        <div className={styles.columns}>
          <Column />
          <Column />
          <Column />
        </div>
        
      </section>

    )
  }
}

export default List;
