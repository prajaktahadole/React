import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


export const slider = () => {
    return (
      <>
        <div >Hello this home page </div>
        <AwesomeSlider>
            <div data-src="/path/to/image-0.png" />
            <div data-src="/path/to/image-1.png" />
            <div data-src="/path/to/image-2.jpg" />
        </AwesomeSlider>
      </>
    );
  };
  
  