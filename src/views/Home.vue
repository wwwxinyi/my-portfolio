<template>
    <div class="home">
      <h1>Welcome to My Portfolio</h1>
      <p>Hi, I'm [Your Name], a passionate developer specializing in [Your Skills].</p>
      <p>Here you can find my projects, skills, and contact information.</p>
  
      <section class="highlights">
        <h2>Highlights</h2>
        <ul>
          <li>🚀 Built a responsive web application using Vue.js.</li>
          <li>📱 Developed a mobile app with React Native.</li>
          <li>💻 Contributed to open-source projects on GitHub.</li>
        </ul>
      </section>
  
      <section class="cta">
        <h2>Check Out My Projects</h2>
        <router-link to="/projects" class="cta-button">View Projects</router-link>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
  };
  </script>
  
  <style scoped>
  .home {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 20px;
  }
  
  .highlights {
    margin: 40px 0;
  }
  
  .highlights h2 {
    font-size: 2rem;
    margin-bottom: 15px;
  }
  
  .highlights ul {
    list-style-type: none;
    padding: 0;
  }
  
  .highlights li {
    font-size: 1.1rem;
    margin: 10px 0;
  }
  
  .cta {
    margin-top: 40px;
  }
  
  .cta h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .cta-button {
    display: inline-block;
    padding: 10px 20px;
    font-size: 1.2rem;
    color: #fff;
    background-color: #42b983;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }
  
  .cta-button:hover {
    background-color: #3aa876;
  }
  </style>