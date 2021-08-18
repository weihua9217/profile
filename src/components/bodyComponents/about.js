import React,{Component} from "react"
import styled,{keyframes} from "styled-components"
import {bounce} from 'react-animations'
const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;

const About = () => {
        return(    
        <section class="resume-section" id="about">
                <div class="resume-section-content">
                <Bounce><h1 class="mb-0">
                        Matthew
                        <span class="text-primary">Lee</span>
                    </h1>
                    </Bounce>
                    <div class="subheading mb-5">
                        contact me &nbsp;: &nbsp;
                        <a class="text-primary">weihua9217[at]gmail.com</a>
                    </div>
                    <p class="lead mb-5">目前就讀國立政治大學資訊科學系四年級，平時樂於參加演講及社群，了解最新的技術。對新的人事物懷有好奇心，並保持著謙卑的態度努力的學習，期許自己能靠資訊的力量為社會盡一份心力。</p>
                    <div class="social-icons">
//                         <a class="social-icon" href="https://github.com/weihua9217"><i class="fab fa-github"></i></a>
//                         <a class="social-icon" href="https://www.facebook.com/weihua9217/"><i class="fab fa-facebook-f"></i></a>
                    </div>
                </div>
        </section>);
}

export default About;
