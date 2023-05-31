import './App.css';

 const developer = {
  "name": "Brian Nkwera",
  "title_specialty": "A WEB DEVELOPER",
  "phone_number": "+2557678764534",
  "primary_location": "Kijitonyama, Dar es Salaam",
  "email": "nkwerabrian@gmail.com",
  "projects_completed": 20,
  "satisfied_clients": 20,
};

function LandingDiv () {
  return (
    <>
      <div className = 'landingDiv py-5'>
        <div className='row' id='top-bar'>
          <h4 className='me-auto col-md-6 ' id='top-name'>Brian Nkwera</h4>
          <button className ='col-md-6 ' id='yellow-button'> Get in Touch</button>
        </div>

        <div className='row py-5'>
          <div className ='col-md-6 pb-5'>
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
          <div className ='col-md-6 d-flex justify-content-center align-items-center p-5'>
            <div className='outer'>
            <div className='landing-img'>
              <img id='main-img'  alt='developer_image' src='./images/project_image.png'></img>

              </div>

            </div>
              
              
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
        <div className='col-md-6 mb-5'>

          <div className='row'>
            <div className='col-6'>
              
              <div className='about-img'>
                <img alt='developer-about' className='about-image' src="./images/boy 2.png"></img>
              </div>
              <div className='about-img'>
                <img alt='developer-about' className='about-image' src="./images/boy 2.png"></img>
              </div>
              <div className="pink-diamond" style={{"margin-left": "70%"}}>

              </div>
              

            </div>

            <div className='col-6'>

            <div className="pink-diamond">

            </div>
              
              <div className='about-img'>
                <img alt='developer-about' className='about-image' src="./images/boy 2.png"></img>
              </div>
              <div className='about-img'>
                <img alt='developer-about' className='about-image' src="./images/boy 2.png"></img>
              </div>
              
              

            </div>
          </div>

        </div>
        <div className='col-md-6'>
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
      <div className='testimoniesDiv py-5 mt-5'>
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

function FinalDiv(){
  return (
    <div style={{"position": "relative"}}>
      <div className='black-div py-5'>
        <h1 className='subtext mb-5 mt-0' id>Wanna make exciting projects together ?</h1>
        <div>
          <input id='email-input' hint='Enter your e-mail'></input>
          <button id='email-button'>Reach out</button>
        </div>
      </div>
      <div id='lastDiv' className='py-5'>
        <div style={{"height": 70}}>

        </div>
         <h1>
          {developer["name"]}
         </h1>
         <div className='row mb-5' style={{"margin-left":"20%", "margin-right":"20%"}}>
            <div className='col-4'>
              <i class="bi bi-telephone-fill little-icon"></i>
              {developer.phone_number}
            </div>
            <div className='col-4'>
              <i class="bi bi-envelope-fill little-icon"></i>
              {developer.email}
            </div>

            <div className="col-4">

<i class="bi bi-geo-alt little-icon"></i>
{developer.primary_location}

</div>
         </div>

        

         <div style={{"background-color":"white",  "height":2}}>

         </div>

         <p style={{"font-size":16}}>All Rights are reserved @ 2023</p>
      </div>
    </div>
  )
}

function ProjectsDiv(){
  return (
    <div className='projectsDiv'>
      <div align='center' className='my-5'>
      <h2 className='div-header'>My <span>Projects</span></h2>
      <p style= {{ 'margin-top': 0 }}>Some of my favourite works</p>

      </div>
      

      <div className='row '>
        <div className='col-5 my-5'>
          <h3>Bafredo Limited</h3>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          </p>
          <button className='pink-button'>
            Visit
          </button>
        </div>
        <div className='col-2' align="center"> 
        <div className='small-circle'>
          <b>1</b>
        </div>
        <div className='black-stick'>

        </div>

        </div>
        
        <div className='col-5 my-5'>
          <img src='./images/project_image.png' alt='project_image'></img>
        </div>
        
      </div>
      <div className='row'>
        
       
        <div className='col-5 mt-5'>
          <img src='./images/project_image.png' alt='project_image'></img>
        </div>

        <div className='col-2' align='center'> 
        <div className='small-circle'>
          <b>1</b>
        </div>
        <div className='black-stick'>

        </div>

        </div>
        

        <div className='col-5 mt-5'>
          <h3>Hekima Schools</h3>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          </p>
          <button className='pink-button'>
            Visit
          </button>
        </div>
        
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
      <LanguagesDiv/>
      <ProjectsDiv/>
      <TestimoniesDiv/>
      <FinalDiv/>
    </div>
  );
}

export default App;
