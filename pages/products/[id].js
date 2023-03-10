import React from 'react'

export default function Products(props) {
  return (
    <>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{props.product.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">{props.product.description}</p>
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths(context) {
  const res = await fetch(`https://dummyjson.com/products?limit=10`);
  const data = await res.json();

  const paths = data.products.map(d => {
    return {
      params: { id: `${d.id}` }
    }
  })

  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const res = await fetch(`https://dummyjson.com/products/${context.params.id}`);
  const data = await res.json();
  console.log(data);

  return {
    props: {
      product: data
    }
  }
}