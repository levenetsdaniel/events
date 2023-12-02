//import './index.css';
import { getEvents } from '../db/dbFunctions'
import { Auth } from '../components/auth.jsx'
import { SearchField } from '../components/search.jsx'
import { LikeButton } from '../components/likeButton.jsx';




export default function Index(props) {




  return (
    <div className="App">
      {/* // modal */}
      <div class='head'>
        <Auth></Auth>
        <SearchField></SearchField>
      </div>


      <div class='main'>


        {
          props.events.map((event, id) => {
            return (

              <div className='eventCard'>
                <a href={event.link}>
                  <div class='eventName'>
                    <h2>{event.name}</h2>
                  </div>
                </a>
                <LikeButton></LikeButton>
              </div>

            )
          })
        }
      </div>
    </div>

  );
};

export const getServerSideProps = async (context) => {
  const events = await getEvents()

  return {
    props: { events }
  }
}




