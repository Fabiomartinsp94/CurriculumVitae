
import '../curriculum/Curriculum.css';
import "./Body.css"
import sections from "../../info_jobs/info"

function Body() {

    return (
  <div className='container'>
      {sections.map ((section, index) =>{
        return(
          <article className='episode overlay_'>
            <div className='episode__number overlay'>{String(index).padStart(2, "0")}</div>
            <div className="episode__content">
              <h2 className='title'>{section.name}</h2>
              <div className='section'>
                {
                  section.description.map ( description => {
                    return(
                          <div className='title'>
                            <h3 className='section'>
                              {description.title}<br/>
                            </h3>
                            <p className='section'>from: {description.starting} <br/> to: {description.finishing}</p>
                            <p className='section'>{description.attribution}</p>
                          </div>
                    )
                  }) 
                }
              </div>
            </div> 
          </article>         
        );
      })
    }
  </div>
  );
}

export default Body;
