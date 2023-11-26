// import './index.css';
import { getEvents } from '../db/dbFunctions'
import { Auth } from './auth'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function Index(props) {




  return (
    <div className="App">
      {/* // modal */}

      <Auth></Auth>


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
    props: { events }
  }
}





