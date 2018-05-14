import React from 'react';
import ReactDOM from 'react-dom';

const rootContainer = document.querySelector('#root')

class App extends React.Component {
  constructor (props) {
      super(props);
      this.state = {
          value: '',
          result: ''
      }
      this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange (event) {
  	let value = event.target.value.toLowerCase()
  	let result = ''
  	for (var i = 0; i < value.length; i++) {
	  console.log(value.charAt(i));
	  switch(value.charAt(i)) {
	    case 'a':
	        result = result + 'Alpha '
	        break;
	    case 'b':
	        result = result + 'Bravo '
	        break;
	    case 'c':
	        result = result + 'Charlie'
	        break;
	    case 'd':
	        result = result + 'Delta '
	        break;
	    case 'e':
	        result = result + 'Echo '
	        break;
	    case 'f':
	        result = result + 'Foxtrot '
	        break;
	    case 'g':
	        result = result + 'Golf '
	        break;
	    case 'h':
	        result = result + 'Hotel '
	        break;
	    case 'i':
	        result = result + 'India '
	        break;
	    case 'j':
	        result = result + 'Juliett '
	        break;
	    case 'k':
	        result = result + 'Kilo '
	        break;
	    case 'l':
	        result = result + 'Lima '
	        break;
	    case 'm':
	        result = result + 'Mike '
	        break;
	    case 'n':
	        result = result + 'November '
	        break;
	    case 'o':
	        result = result + 'Oscar '
	        break;
	    case 'p':
	        result = result + 'Papa '
	        break;
	    case 'q':
	        result = result + 'Quebec '
	        break;
	    case 'r':
	        result = result + 'Romeo '
	        break;
	    case 's':
	        result = result + 'Sierra '
	        break;
	    case 't':
	        result = result + 'Tango '
	        break;
	    case 'u':
	        result = result + 'Uniform '
	        break;
	    case 'v':
	        result = result + 'Victor '
	        break;
	    case 'w':
	        result = result + 'Whiskey '
	        break;
	    case 'x':
	        result = result + 'X-ray '
	        break;
	    case 'y':
	        result = result + 'Yankee '
	        break;
	    case 'z':
	        result = result + 'Zulu '
	        break;
	    case '1':
	        result = result + 'One '
	        break;
	    case '2':
	        result = result + 'Two '
	        break;
	    case '3':
	        result = result + 'Three '
	        break;
	    case '4':
	        result = result + 'Four '
	        break;
	    case '5':
	        result = result + 'Five '
	        break;
	    case '6':
	        result = result + 'Six '
	        break;
	    case '7':
	        result = result + 'Seven '
	        break;
	    case '8':
	        result = result + 'Eight '
	        break;
	    case '9':
	        result = result + 'Nine '
	        break;
	    case '0':
	        result = result + 'Zero '
	        break;
	    case ' ':
	        result = result + '[space] '
	        break;
	    default:
	        result = result + value.charAt(i) + '[unknown] '
	  }
	}
    this.setState({
        value: event.target.value,
        result: result
    })
  }
  
  render() {
    return (
      <div className="App">
      	<div class="form-group">
    		<label>Input</label>
        	<input class="form-control" type="text" value={this.state.value} onChange={this.handleChange}/>
        </div>
        <div class="form-group">
    		<label>Result</label>
       		<textarea class="form-control" rows="3" value={this.state.result}/>
       	</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, rootContainer)
