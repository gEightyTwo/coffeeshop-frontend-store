import React from 'react';
import '../css/App.css';

const App = (props) => {

  return (
    <div className='container'>
      <section className='order-queue'>

        <div className='card fulfilled'>
          <h1 className='card-order-items'>1 x Americano, 12oz</h1>
          <div className='card-content'>
            <h2 className='card-customer-name'>
              Dan Dog
            </h2>
            <div className='card-pickup-time-block'>
              <i className="far fa-check-circle"></i>
              <span className='card-pickup-time'>done</span>
            </div>
          </div>
          <h3 className='card-order-id'>ORDER ID #123ASSAD27</h3>
        </div>
        <div className='card fulfilled'>
          <h1 className='card-order-items'>1 x Americano, 12oz</h1>
          <div className='card-content'>
            <h2 className='card-customer-name'>
              Dan Dog
            </h2>
            <div className='card-pickup-time-block'>
              <i className="far fa-check-circle"></i>
              <span className='card-pickup-time'>done</span>
            </div>
          </div>
          <h3 className='card-order-id'>ORDER ID #123ASSAD27</h3>
        </div>
        <div className='card fulfilled'>
          <h1 className='card-order-items'>1 x Americano, 12oz</h1>
          <div className='card-content'>
            <h2 className='card-customer-name'>
              Dan Dog
            </h2>
            <div className='card-pickup-time-block'>
              <i className="far fa-check-circle"></i>
              <span className='card-pickup-time'>done</span>
            </div>
          </div>
          <h3 className='card-order-id'>ORDER ID #123ASSAD27</h3>
        </div>

        <div className='card'>
          <h1 className='card-order-items'>1 x Americano, 12oz</h1>
          <div className='card-content'>
            <h2 className='card-customer-name'>
              Mark Pavlovski
            </h2>
            <div className='card-pickup-time-block'>
              <i className="far fa-clock"></i>
              <span className='card-pickup-time'>5 min</span>
            </div>
          </div>
          <h3 className='card-order-id'>ORDER ID #123ASSAD27</h3>
        </div>
        <div className='card'>
          <h1 className='card-order-items'>1 x Americano, 12oz</h1>
          <div className='card-content'>
            <h2 className='card-customer-name'>
              Mark Pavlovski
            </h2>
            <div className='card-pickup-time-block'>
              <i className="far fa-clock"></i>
              <span className='card-pickup-time'>5 min</span>
            </div>
          </div>
          <h3 className='card-order-id'>ORDER ID #123ASSAD27</h3>
        </div>
        <div className='card'></div>
        <div className='card'></div>
        <div className='card'></div>
        <div className='card'></div>
        <div className='card'></div>
        <div className='card'></div>
        <div className='card'></div>
        <div className='card'></div>
        <div className='card'></div>
        <div className='card'></div>


      </section>
      <section className='order-item'>


        <header className='order-header'>
          <div>
            <h1 className='order-id'>ORDER #AS6ASF876</h1>
            <h1 className='order-customer-name'>Mark Pavlovski</h1>
          </div>
          <div className='order-pickup-time-block'>
            <i className="far fa-clock"></i>
            <span className='order-pickup-time'>5 min</span>
          </div>
        </header>


        <div className='order-card'>
          <h1>1 x Americano - 12 oz</h1>
          <ul>
            <li>2 Shots</li>
            <li>2% Milk</li>
          </ul>
        </div>
        <div className='order-card'>
          <h1>1 x Latte - 16 oz</h1>
          <ul>
            <li>2 Shots</li>
            <li>Extra Shot</li>
            <li>Almond Milk</li>
          </ul>
        </div>



        <footer className='order-footer'>
          <div className='order-button'>Complete Order</div>
        </footer>

      </section>
    </div>
  )
}

export default App;
