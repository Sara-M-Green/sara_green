export default function AboutMe() {
  return (
    <section id="AboutMe" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">Howdy!</span>
          </h1>
          <p className="hero--section-description">
            I’m Sara—a web developer with a knack for front-end JavaScript
            frameworks like Vue, Angular, and React. I thrive on building
            intuitive web tools and high-demand REST APIs, particularly in the
            eCommerce space. When I’m not crafting innovative software
            solutions, you’ll find me enjoying the mountains either skiing,
            mountain biking, or exploring alpine peaks!
          </p>
        </div>
        <a
          href="
        #Contact"
        >
          <button className="btn btn-primary">Let's Chat!</button>
        </a>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.jpg" alt="Hero Section Image"></img>
      </div>
      <div className="custom-shape-divider-bottom-1724965469">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
}
