import About from "./bodyComponents/about"
import Education from "./bodyComponents/education"
import Experience from "./bodyComponents/experience"
import Interests from "./bodyComponents/interests"
import Skills from "./bodyComponents/skills"
import Autobiography from "./bodyComponents/autobiography"

const Body = () => {
    return( 
        <body id="page-top">
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
                <span class="d-block d-lg-none">Matthew Lee</span>
            </a>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
             data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
              aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>

            <div class="collapse navbar-collapse" id="navbarResponsive">
                
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#education">Education</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#autobiography">Autobiography</a></li>
                </ul>
            
            </div>
        </nav>
 
        <div class="container-fluid p-0">
            <About />
            <hr class="m-0" />
            <Experience/>
            <hr class="m-0" />
            <Education/>
            <hr class="m-0" />
            <Skills/>
            <hr class="m-0" />
            <Interests />
            <hr class="m-0" />
            <Autobiography/>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"></script>

        <script src="js/scripts.js"></script>
    </body>
    );
}

export default Body;