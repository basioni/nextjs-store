import React from 'react'

export default function Products(props) {
  return (
    <div class="container-fluid align-self-center">
      <div class="row">
        <div class="col">
          <h1 class="text-start  gx-5">{props.product.title} </h1>
          <hr />
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-5">
                <img src={props.product.thumbnail} class="img-fluid rounded-start" alt={props.product.title} />
              </div>
              <div class="col-md-7">
                <div class="card-body">
                  <table class="table">
                    <tbody>
                      <tr>
                        <th scope="row" width="25%"><b>Sku:</b></th>
                        <td>{props.product.id}</td>
                      </tr>
                      <tr>
                        <th scope="row"><b>Brand:</b></th>
                        <td>{props.product.brand}</td>
                      </tr>
                      <tr>
                        <th scope="row"><b>Price:</b></th>
                        <td>${props.product.price}</td>
                      </tr>
                      <tr>
                        <th scope="row"><b>Discount Percentage:</b></th>
                        <td>{props.product.discountPercentage}%</td>
                      </tr>
                      <tr>
                        <th scope="row"><b>Stock:</b></th>
                        <td>{props.product.stock}</td>
                      </tr>
                      <tr>
                        <th scope="row"><b>Category:</b></th>
                        <td>{props.product.category}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">Description:</h3>
              <p class="card-text">{props.product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticPaths(context) {
  const res = await fetch(`https://dummyjson.com/products?limit=12`);
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