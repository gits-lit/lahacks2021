import React from 'react';
import Map from '../components/Map';

const LogPage = (props) => {
  return (
    <div>
      <Map
        markerVisibility={props.markerVisibility}
        setCall={props.setCall}
        dial={props.dial}/>
    </div>
  )
}

export default LogPage;