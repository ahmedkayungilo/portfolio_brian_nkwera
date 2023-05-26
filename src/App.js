import './App.css';

function LandingDiv () {
  return (
    <>
      <div className = 'landingDiv py-5'>
        <div className='row' id='top-bar'>
          <h4 className='me-auto col-6 ' id='top-name'>Brian Nkwera</h4>
          <button className ='ms-auto col-6 ' id='yellow-button'> Get in Touch</button>
        </div>

        <div className='row py-5'>
          <div className ='col-6'>
            <h2>I AM</h2>
            <h1 style = {{ color: 'white' }} >BRIAN NKWERA</h1>
            <h3>A WEB DEVELOPER</h3>
            <p>A skilled web developer with a passion for creating outstanding digital experiences.</p>
            <div>
              <a href='www.google.com'><i class="bi bi-facebook"></i></a>
              <a href='www.google.com'><i class="bi bi-linkedin"></i></a>
              <a href='www.google.com'><i class="bi bi-instagram"></i></a>
            </div>
            
          </div>
          <div className ='col-6'>
              <img alt='john'></img>
            </div>
        </div>
      </div>
    </>

  );
}

function AboutDiv() {
  return (
    <>
      <div className='aboutDiv row py-5'>
        <div className='col-6'>
          Images
        </div>
        <div className='col-6'>
          <h2 className='div-header'>About <span>Me</span></h2>
          <p>I am Full Stack developer focused with the MERN stack </p>
          <p className='subtext'> A skilled web developer with a passion for creating outstanding digital experiences</p>

          <div className='row pt-4'>
            <div className='col-6 pe-3'>
              <h3>Projects Completed</h3>
              <p className='number'>20+</p>
            </div>
            <div className='col-6 pe-3'>
              <h3>Satisfied Clients</h3>
              <p className='number'>20+</p>
            </div>
          </div>
          <button className='pink-button'>Download CV</button>
        </div>
      </div>
    </>
  )
}

function ServiceDiv(){
  return (
    <div className='serviceDiv py-5'>
      <h2 className='div-header'>Services <span>Offered</span></h2>
      <p style= {{ 'margin-top': 0 }}> What I do</p>

      <div className='row'>
        <div className='scard col p-3' style={{'background-color': '#eeeeee'}}>
          <i class="bi bi-pc-display-horizontal" style={{'font-size': 64 }}></i>
          <h2>Web Development</h2>
          <p className='subtext'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
          <button className='pink-button'>Read More</button>
        </div>
        <div className=' scard col p-3  ' style={{'background-color': '#000000', 'color':'white'}}>
          <i class="bi bi-lightbulb" style={{'font-size': 64 }}></i>
          <h2>SEO</h2>
          <p className='subtext'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
          <button className='pink-button'>Read More</button>
        </div>
        <div className=' scard col p-3' style={{'background-color': '#eeeeee'}}>
          <i class="bi bi-pc-display-horizontal" style={{'font-size': 64 }}></i>
          <h2>Web Development</h2>
          <p className='subtext'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
          <button className='pink-button'>Read More</button>
        </div>
      </div>
    </div>
  )
}

function TestimoniesDiv(){
  return (
    <>
      <div className='testimoniesDiv py-5'>
        <h2 className='div-header'><span>Testimonies</span></h2>
        <p className='subtext'>Listen to what people are saying about my work</p>

        <div className='row'>
          <div className='col tcard p-5'>
            <div className='row'>
              <img src="images/boy3.png" alt='meow' className='col ceo-image' ></img>
              <div className='col tcard-title'>
                <p className='subtext' style={{'font-weight': 'bold'}}>Brian Nkwera</p>
                <p className='subtext'>CEO</p>
              </div>
            </div>
            <p className='subtext testimony-text' style={{'font-size': 19}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            </p>

          </div>
          <div className='col tcard p-5'>
            <div className='row'>
              <img src="images/boy3.png" alt='meow' className='col ceo-image' ></img>
              <div className='col tcard-title'>
                <p className='subtext' style={{'font-weight': 'bold'}}>Brian Nkwera</p>
                <p className='subtext'>CEO</p>
              </div>
            </div>
            <p className='subtext testimony-text' style={{'font-size': 19}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            </p>

          </div>
          <div className='col tcard p-5'>
            <div className='row'>
              <img src="images/boy3.png" alt='meow' className='col ceo-image' ></img>
              <div className='col tcard-title'>
                <p className='subtext' style={{'font-weight': 'bold'}}>Brian Nkwera</p>
                <p className='subtext'>CEO</p>
              </div>
            </div>
            <p className='subtext testimony-text' style={{'font-size': 19}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            </p>

          </div>

        </div>
      </div>
    </>

  )
}

function LanguagesDiv(){

  const language_images = ["images/mongo.png","images/express.png","images/react.png","images/node.png","images/vite.png"]
  return (
    <div className='languagesDiv py-5'>
      <h2 className='div-header'>Favorite <span>Languages</span></h2>
      <div className='row mt-5'>
        {
          language_images.map(
            (image) => (
              <img className='lang-logo col' alt='lang-logo' src={image}></img>)
          )
        }
      </div>
    </div>
  )
}



function App() {
  return (
    <div className="App">
      <LandingDiv/>
      <AboutDiv/>
      <ServiceDiv/>
      <TestimoniesDiv/>
      <LanguagesDiv/>
    </div>
  );
}

export default App;
