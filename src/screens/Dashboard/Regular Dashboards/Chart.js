import React from "react";
import {Line} from 'react-chartjs-2'
export default class Chart extends React.Component {
    constructor(props) {
      super()
    }

  

    render() {
      return (
        <Line data={{
            labels: this.props.label,
            datasets: [{
                // label: 'My First dataset',
                backgroundColor: '#bffefe',
                borderColor: '#4f9da2',
                data: this.props.data
            }]
        }} />
);
}
}