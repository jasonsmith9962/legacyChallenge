import React, {Component} from 'react';
import { Input } from 'reactstrap';


class SearchIndex extends Component {
  constructor() {
    super();
  this.state = {
    filter: '',
    things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
  }
  }
  


searchThings(e) {
  this.setState({filter: e.target.value});
};

render() {
let { filter,things} = this.state;

let thingSearch=things.filter(item => {
  return Object.keys(item).some(key => 
    item[key].toLowerCase().includes(filter.toLocaleLowerCase()))
});

  return (
  <div>
    <Input type="text" value={filter} onChange={this.searchThings.bind(this)} placeholder='Search Here' />
    <h3>Results:</h3>
    <center>
      <table border="1">
        <tr>
          <th>things</th>
        </tr>
        {
          (thingSearch.filter(item => 
            <tr>
              <td key>
            {item.things}
            </td>
            </tr>
            ))
        }
      </table>
    </center>
    
  </div>
  )
}
}
 
export default SearchIndex;
