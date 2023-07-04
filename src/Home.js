import React from 'react'
import "./Home.css"
import Product from './Product'


function Home() {
  return (
    <div className='home'>
        <div classname="home-container">
            <img src="https://images.unsplash.com/photo-1633174524778-61a18ee54490?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80" alt='' className='home-image' />
        
         
          <div className='home-row'>
            <Product  id="49538000" title='The lean startup' price={29.99} image='https://m.media-amazon.com/images/I/81-QB7nDh4L.jpg' rating={5}/> 
            <Product id="49538094"
                title="Kenwood kMix Stand Mixer for
                Baking, Stylish Kitchen Mixer with
                K-beater, Dough Hook and Whisk, 5 Litre
                Glass Bowl"
                price={239.0}
                rating={4}
                image="https://m.media-amazon.com/images/I/61FJtVQh9bL._SL1200_.jpg"
                />
          </div>  

          <div className='home-row'>
            <Product id="56737094" title='Samsung LC49RG90SSUXEN'
            price={199.99}
            rating={3}
            image='https://m.media-amazon.com/images/I/81rus0UFhsL.jpg' />
            <Product id="88598088" title='Samsung LC49RG90SSUXEN'
            price={19.99}
            rating={5}
            image='https://m.media-amazon.com/images/I/81rus0UFhsL.jpg' />
            <Product title="Amazon Echo" price={98.99} rating={5} image='data:image/jpeg;base64,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' />
          </div>

          <div className='home-row'>
          <Product id="50000000" title="Samsung LC49RG90SSUXEN 49'" price={1094.98} rating={4} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1NCpdAFHN6QS7LvZrX4UrhlbiGwtON8vF3m7NBtW1tjwPQrQu_t3fEt0XvSpuq-4CliU&usqp=CAU' />
          </div>
        </div>
    </div>
  )
}

export default Home
