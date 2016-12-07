import React from 'react'
import Project from './Project'
import data from './data'
import {Grid, Cell} from 'react-mdl'

class Projects extends React.Component {
  render() {
    const sites = this.props.route.shuffle ? this.shuffle(data) : data
    return (
      <div>
        <Grid>
          {
            sites.map((entry, i) => (
              <Cell col={4} tablet={8} phone={12} key={i}>
                <Project name={entry.name} />
              </Cell>
            ))
          }
        </Grid>
      </div>
    )
  }

  shuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}

export default Projects
