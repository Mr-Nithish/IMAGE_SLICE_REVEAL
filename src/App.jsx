import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';
import Image from './component/Image';

const App = () => {

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.utils.toArray('.image-container').forEach((container, index) => {
      const q = gsap.utils.selector(container);
      gsap.utils.toArray(q(".image")).forEach((piece, i) => {
        gsap.from(piece, {
          x: (i + 1) * 1200,
          duration: 1.5,
          ease: "expoScale(0.5,7,none)",
          ScrollTrigger: {
            trigger: `.image-${index + 1}`,
            start: "top bottom",
          },
        });
      });
    });
  });
  
  return (
    <div className='flex flex-col gap-20 bg-neutral-950 py-[15rem] px-10'>
      <Image imgNum="1"/>
      <Image imgNum="2"/>
      <Image imgNum="3"/>
      <Image imgNum="4"/>
      <Image imgNum="5"/>
    </div>
  )
}

export default App;