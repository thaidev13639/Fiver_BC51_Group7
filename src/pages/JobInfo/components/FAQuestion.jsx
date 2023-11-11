import React from 'react'

export default function FAQuestion(props) {
  return (
    <>
      <div className='item'>
        <a className="button" data-toggle="collapse" href={`#collapseExample${props.number}`} role="button" aria-expanded="false" aria-controls={`collapseExample${props.number}`}>
          <span>
            There are many passages but the majority?
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
        </a>
        <div className="collapse togle" id={`collapseExample${props.number}`}>
          <div className="card card-body">
            Voluptates amet earum velit nobis aliquam laboriosam nihil debitis facere voluptatibus consectetur quae quasi fuga, ad corrupti libero omnis sapiente non assumenda, incidunt officiis eaque iste minima autem.
          </div>
        </div>
      </div>

    </>
  )
}
