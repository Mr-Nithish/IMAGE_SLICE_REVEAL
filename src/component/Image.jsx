import '../App.css';
const Image = ({ imgNum }) => {
  return (
    <div className={`image-container w-[420px] overflow-hidden place-self-center image-${imgNum}`}>
    <div className={`img-${imgNum} image piece1`}></div>
    <div className={`img-${imgNum} image piece2`}></div>
    <div className={`img-${imgNum} image piece3`}></div>
    <div className={`img-${imgNum} image piece4`}></div>
    <div className={`img-${imgNum} image piece5`}></div>
  </div>    
  )
}

export default Image;

