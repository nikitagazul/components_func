import './App.css';
import propTypes from 'prop-types';
import ItemModel from './models/ItemModel';

function ShopItemFunc(props){
  const {data} = props;
  return(
    <div className='main-content'>
      <h2>{data.brand}</h2>
      <h1>{data.title}</h1>
      <h3>{data.description}</h3>
      <div className='desctiption'>{data.descriptionFull}</div>
      <div className='highlight-window mobile'>
        <div className='highlight-overlay'></div>
      </div>
      <div className='divider'></div>
      <div className='purchase-info'>
        <div className='price'>
          {data.currency}{data.price}
        </div>
        <button>Add Item</button>
      </div>
    </div>
  );

}

function App() {
  const item ={
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
  }
  return (
    <div className='container'>
      <div className='background-element'>
      </div>
      <div className='highlight-window'>
        <div className='highlight-overlay'></div>
      </div>
      <div className='window'>
        <ShopItemFunc data={item}/>
      </div>
    </div>
  );
}

ShopItemFunc.propTypes = {
  data: propTypes.instanceOf(ItemModel).isRequired
}

export default App;
