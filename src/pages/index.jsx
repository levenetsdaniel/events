
// import './index.css';
import {getEvents} from '../db/dbFunctions'

import TextField from '@mui/material/TextField';

export default function Index(props) {
  
  return (
    <div className="App">
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      {JSON.stringify(props.events)}
      {
        props.events.map((event, id) => {
          return (<div>
            {event.name}
          </div>);
        })
      }
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const events = await getEvents()

  return {
    props: {events}
  }
}





