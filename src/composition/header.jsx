import React, {Component} from 'react';
import './header.less';

class Header extends Component {

  render() {
    return (
        <div className="header">
          <h1>Dette er Headeren</h1>
          <p>reqs: x-axis: players</p>
          <p>reqs: y-axis: lootentries</p>
          <p>date</p>
          <p>sum of drops</p>
          <p>splitsum</p>
        </div>
    );
  }
}

export default Header;
