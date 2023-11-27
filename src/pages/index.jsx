//import './index.css';
import { getEvents } from '../db/dbFunctions'
import { Auth } from './objects/auth.jsx'
import { SearchField } from './objects/search.jsx'
import { EventSelect } from './objects/eventSelcet.jsx';




export default function Index(props) {




  return (
    <div className="App">
      {/* // modal */}
      <div class='head'>
        <Auth></Auth>
        <SearchField></SearchField>
      </div>



      {/* {JSON.stringify(props.events)} */}

      {
        props.events.map((event, id) => {
          return (
            <div className='eventCard'>
              <div class='eventName'>
                <h2><a href={event.link}>{event.name}</a></h2>
                
              </div>
              <EventSelect></EventSelect>
            </div>

          )
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





