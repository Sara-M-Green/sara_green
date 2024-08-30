import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section id="Experience" className="experience">
      <div className="portfolio--container">
        <h2 className="skills--section--heading">
          <span className="underline">Experience</span>
        </h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--image">
              <a href={item.link} target="_blank">
                <img src={item.src} alt="Product Chain" />
              </a>
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <h2 className="skills--section--position">{item.position}</h2>
              <p className="skills--section--description">{item.description}</p>
            </div>
            <ul className="skills--section--projects">
              {item.projects?.map((proj, projIndex) => (
                <li key={projIndex}>{proj}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
