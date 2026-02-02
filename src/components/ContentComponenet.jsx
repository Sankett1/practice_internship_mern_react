import React from 'react'
import image from '../assets/images/virat.jpg'
import '../assets/css/content.css'

 var BioData = {
    name: "Virat Kohli",
    birthdate: "November 05, 1988",
    age: 37,
    
  };

export default function ContentComponenet() {
  return (
    <div className="content">
      <ul>
      <img src={image} alt="Virat Kohli" height="400" width="350" style={{borderRadius: "15px", border: "2px solid black"}}/>
      <h2><li>Name: {BioData.name}</li></h2>
      <h2><li>Birth Date: {BioData.birthdate}</li></h2>
      <h2><li>Age: {BioData.age}</li></h2>
      <h3> Virat Kohli is one of the most accomplished cricketers in the history of the game and a true mentor figure in modern cricket. With over 25,000 international runs, 80+ international centuries, and the rare achievement of scoring centuries in all three formats, Kohli has redefined consistency and excellence. He is the only player to win the ICC Cricketer of the Year (Sir Garfield Sobers Trophy) four times, a testament to his dominance across eras. 
           Under his captaincy, India became a formidable Test side, achieving historic series wins in Australia and emerging as the No. 1 Test team for five consecutive years. His leadership emphasized fitness, discipline, and fearlessness, setting new benchmarks for Indian cricket. 
      </h3>
      <h3>Beyond records and trophies, Virat Kohli’s greatest achievement lies in his role as a mentor and culture-builder. He inspired an entire generation of cricketers to value fitness, mental toughness, and self-belief. Young players look up to him not just for his batting mastery, but for his relentless work ethic, honesty about failures, and hunger to improve. Kohli consistently backed youngsters, gave them confidence on big stages, and led by example—showing that success is earned through preparation and accountability.
          Virat Kohli is more than a legendary batsman; he is a mentor, leader, and role model who transformed Indian cricket’s mindset and continues to influence players and fans around the world through his passion, resilience, and unwavering commitment to excellence. 
      </h3>
      
      </ul>
    </div>
  )
}
