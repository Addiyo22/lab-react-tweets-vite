import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Action from "./Actions";

function Tweet({tweet}) {
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image}/>
      <div className="body">
        <div className="top">
        <User name={tweet.user.name} handle={tweet.user.handle}/>
          

          <Timestamp className="timestamp" timestamp={tweet.timestamp}/>
        </div>

        <Message message={tweet.message}/>

        <Action />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
