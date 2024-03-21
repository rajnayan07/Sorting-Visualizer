import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
  <Navbar/>
  <div className='about-sort'>
  <h1>About Our Sorting Visualizer</h1>
  <p> Welcome to our Sorting Visualizer!<br/> We are passionate about helping individuals learn and understand sorting algorithms through interactive and engaging visualizations. Our platform provides a fun and educational way to explore how various sorting techniques work, giving you a deeper insight into the world of computer science and algorithm design.
</p>
 <h1>Why Sorting Visualizer?</h1>
 <p> Sorting algorithms play a fundamental role in computer science, as they enable us to organize and arrange data efficiently. By using our Sorting Visualizer, you can witness these algorithms in action, step by step. Whether you're a student, developer, or simply curious about the inner workings of algorithms, our platform offers a hands-on experience to grasp their functioning.</p>

<h1>How to Use</h1>
<p>Using our Sorting Visualizer is a breeze! Simply select your preferred sorting algorithm and adjust any relevant parameters like array size or visualization speed. Click the "Start" button, and let the magic happen. You'll witness the algorithm sorting the elements right before your eyes, providing valuable insights into its working principles.</p>
<h1>Our Mission</h1>
<p>Our mission is to promote computer science education and make learning algorithms an enjoyable experience for everyone. We believe that visualizations are a powerful tool for grasping complex concepts, and we strive to create a platform that fosters curiosity and understanding in the field of computer science.</p>
  </div>
  <Footer/>
    </div>
  )
}

export default About