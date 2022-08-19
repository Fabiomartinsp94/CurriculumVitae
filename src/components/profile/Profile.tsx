
import './Profile.css';
import '../curriculum/Curriculum.css'
import photo from "../../media/photo.png"


function Profile() {

  return (
      <div className="overlay">
          <div className="singlePhoto">
            <img src={photo} className="borderCircle" alt="profile"/>
          </div>
          <h1 className='profileTitle'>Curriculum Vitae</h1>
          <h3 className='profileTitle'>Fábio Martins</h3>
          <p className='profileTitle'>
            Crawler developer with solid knowledge of Python, Node.js, AWS services, RESTful APIs, SQL and NO-SQL databases, developing skills to crack antibots, intercept/modify requests.
            <br/>
            Throwing myself into Front-End development with React.js.
          </p>
        </div>
  )
}

export default Profile;
