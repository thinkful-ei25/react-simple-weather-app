export LocationInput from './locationInput';
import WheatherOutput from './weatherOutput';


export default class weatherBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [{
        tempK: '280',
        tempF: '72',
        main: 'rain',
        description: 'light rain',
        name: 'Miami',
        zip: 10201
      },
      {
        tempK: '200',
        tempF: '56',
        main: 'rainy',
        description: 'medium rain',
        name: 'Boston',
        zip: 10500
      },
      {
        tempK: '380',
        tempF: '95',
        main: 'rainier',
        description: 'heavy rain',
        name: 'Green Bay',
        zip: 20202
      }]
    };
  }

  render() {
    <div>
      <LocationInput />
      <
    </div>
    }
  
}