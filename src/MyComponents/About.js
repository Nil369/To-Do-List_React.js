import React from 'react'

const About = () => {
  return (
    <>
    <div class="row">
  <div class="col-4">
    <nav id="navbar-example3" class="h-100 flex-column align-items-stretch pe-4 border-end">
      <nav class="nav nav-pills flex-column">
        <a class="nav-link" href="#item-1">About Me</a>
        <nav class="nav nav-pills flex-column">
          <a class="nav-link ms-3 my-1" href="#item-1-1">Skills</a>
          <a class="nav-link ms-3 my-1" href="#item-1-2">Social Links</a>
        </nav>
        <a class="nav-link" href="#item-2">About The App</a>
        <a class="nav-link" href="#item-3">How to use the app ??</a>
        <nav class="nav nav-pills flex-column">
        </nav>
      </nav>
    </nav>
  </div>

  <div class="col-8">
    <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" class="scrollspy-example-2" tabindex="0">
      <div id="item-1">
        <h4>Profile Pic</h4>
         <p>My_Pic</p>
          <b>Hi 👋🏼 I'm Akash Halder</b>, a dynamic professional with expertise in <b>video editing, graphic design, and full-stack web development.</b>
         </p>
      </div>
      <div id="item-1-1">
        <h5>Skills</h5>
        <p>► Video Editing and Graphic Design:
          I excel in transforming ideas into captivating visual stories, leveraging industry-standard tools and a keen eye for design aesthetics.<br><br>
         
          ► Full Stack Web Development:
          My proficiency spans front-end (HTML, CSS, JavaScript, React, Next.js, Vite, Next.js) to back-end (Python, Django,Flask, node.js, Mongodb ) development. I'm dedicated to creating scalable, user-friendly web applications.<br><br>
          
          ► Programming Languages and Frameworks:
          Fluent in C, C++, Python, and JavaScript, I use frameworks like Django,Next.js, Flask to optimize development processes and drive project efficiency.<br><br>
          
          ► Continuous Learning and Innovation:
          Committed to staying ahead in technology, I embrace ongoing learning to bring cutting-edge solutions to every project.<br><br>
          </p>
      <div id="item-1-2">
        <h5>Social Links</h5>
        <a href="https://www.linkedin.com/in/akash-halder-nil/" target="_blank">LinkedIn</a><br>
        <a href="https://github.com/Nil369" target="_blank">Github</a>
      </div>
      <div id="item-2">
        <h4>About The App</h4>
        <p>This ia a Simple To-Do List App made using Flask. It also performs <b>CRUD - operations</b></p>
      </div>
      <div id="item-3">
        <h4>How to use the app??</h4>
        <p>1. Write your todo Title. <br>
           2. Write a description what you want to do. <br>
           3. Click "Add to list". <br>
           4. Click on Update to update a Todo || Click on Delete to delete a todo
        </p>
      </div>

    </div>
  </div>
</div>
    </>
  )
}

export default About
