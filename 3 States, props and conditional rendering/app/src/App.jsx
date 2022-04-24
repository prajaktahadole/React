import logo from './logo.svg';
import './App.css';
import {Category} from './components/Category';

function App() {

  const arr = [ 1, 2, 3, 4];

  const array = [
    { name : "HTC", Style : "number"},
    { name : "micromax", Style : "Alphabate"}
  ];


  const data = [
    {
      heading : "Phones",
      items : ["Sumsang" , "Sony" , "Motorola"]
    },
    {
      heading : "Manufacturers",
      items : ["China" , "India" , "USA"]
    },
  ]

  const navbar = [
    {image : "https://rukminim2.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" , title : "Top offers"},
    {image : "https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" , title : "Grocery"},
    {image : "https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" , title : "Mobile"},
    {image : "https://rukminim2.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100",  title : "Fashion"},
    {image : "https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" , title : "Electronics"},
    {image : "https://rukminim2.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" , title : "Application"},
  ]

  return (
    <div className="App">
      {
        arr.map((el) => (           //for even element circle and for odd square
          <li className={`${el % 2 === 0 ? "circlelist" : "squarelist"}`}>{el}</li>
        ))}

      {
        array.map((el) => (
          <li className={el.Style}>{el.name}</li>
        ))}


        <div className='nav'>
          {navbar.map((el) => (
            <Category image={el.image} lable={el.title} />
          ))}
        </div>


      <div>
        <Category />
      </div>

      
    </div>
  );
}

// function Heading(heading){
//   return <div>{heading}</div>
// }
// function Items(items){
//   return <ul>
//   <li>{items} </li>
// </ul>
// }

export default App;
