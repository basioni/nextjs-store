import React from 'react'

export default function Orders(props) {
  return (
    <div class="container-fluid align-self-center">
      <div class="row">
        <div class="col">
          <h1 class="text-start  gx-5">{props.order.id} </h1>
          <hr />
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-5">
                <img src={props.order.thumbnail} class="img-fluid rounded-start" alt={props.order.title} />
              </div>
              <div class="col-md-7">
                <div class="card-body">
                  <table class="table">
                    <tbody>
                      <tr>
                        <th scope="row" width="25%"><b>Sku:</b></th>
                        <td>{props.order.id}</td>
                      </tr>
                      <tr>
                        <th scope="row"><b>Brand:</b></th>
                        <td>{props.order.brand}</td>
                      </tr>
                      <tr>
                        <th scope="row"><b>Price:</b></th>
                        <td>${props.order.price}</td>
                      </tr>
                      <tr>
                        <th scope="row"><b>Stock:</b></th>
                        <td>{props.order.stock}</td>
                      </tr>
                      <tr>
                        <th scope="row"><b>Category:</b></th>
                        <td>{props.order.category}</td>
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
              <p class="card-text">{props.order.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticPaths(context) {
  const res = await fetch(`https://dummyjson.com/carts?limit=12`);
  const data = await res.json();

  const paths = data.carts.map(d => {
    return {
      params: { 
        id: `${d.id}` ,

      }
    }
  })

  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const res = await fetch(`https://dummyjson.com/carts/${context.params.id}`);
  const data = await res.json();

  return {
    props: {
      order: data
    }
  }
}