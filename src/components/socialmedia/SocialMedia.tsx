
import '../curriculum/Curriculum.css';
import linkedin from "../../media/linkedin.png"
import github from "../../media/github.png"
import email from "../../media/email.png"
import "./SocialMedia.css"

function SocialMedia() {

  interface SocialMedia {
    name: string;
    link: string;
    icon: string;
  }
  
  const social_medias: Array<SocialMedia> = [
    {name: "linkedin", link: "https://www.linkedin.com/in/fabiomartinsp/", icon: linkedin},
    {name: "github", link: "https://github.com/Fabiomartinsp94/", icon: github},
    {name: "email", link: "fabiomartins.p@gmail.com", icon:email}
  ]
  // return (<p>{social_medias_names}</p>)  

  return (
  <div>
    <nav role='navigation' className="navigation">
      <input type="checkbox" id="post" className="postToggle" />
      <label htmlFor="post" className="postBtn"></label>
      <ul>
      

  
      {social_medias.map ( social =>{
        return(
              <li className={social.name}>
                <a className="App-link" href={social.link} target="_blank" rel="noopener noreferrer">
                  <img src={social.icon} className="App-logo" alt="logo" />
                </a>
              </li>          
        );
      })
    }
      </ul>
    </nav>
    <div className="overlay"></div>
  </div>
  );
}

export default SocialMedia;
