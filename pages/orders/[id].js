import React from 'react'

export default function Orders(props) {
  return (
    <div class="container-fluid align-self-center">
      <div class="row">
        <div class="col">
          <h1 class="text-start  gx-5">Order: #{props.order.id} </h1>
          <hr />
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-12">
                <div class="card-body">
                  <table class="table">
                    <tbody>
                      <tr>
                        <th scope="row" width="25%"><b>Order ID:</b></th>
                        <td>{props.order.id}</td>
                      </tr>
                      <tr>
                        <th scope="row"><b>User:</b></th>
                        <td> <img src={props.customer.image} class="rounded-start" height="45" alt={props.customer.username} />{props.customer.username}</td>
                      </tr>
                      <tr>
                        <th scope="row"><b>Total:</b></th>
                        <td>${props.order.total}</td>
                      </tr>
                      <tr>
                        <th scope="row"><b>Discounted Total:</b></th>
                        <td>${props.order.discountedTotal}</td>
                      </tr>
                      <tr>
                        <th scope="row"><b>Total Products:</b></th>
                        <td>{props.order.totalProducts}</td>
                      </tr>
                      <tr>
                        <th scope="row"><b>Total Quantity:</b></th>
                        <td>{props.order.totalQuantity}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
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
        id: `${d.id}`,
        userId: `${d.userId}`
      }
    }
  })
  console.log(paths);
  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const ordersResponse = await fetch(`https://dummyjson.com/carts/${context.params.id}`);
  const data = await ordersResponse.json();

  const customerResponse = await fetch(`https://dummyjson.com/users/1`);
  // const customerResponse = await fetch(`https://dummyjson.com/users/${context.params.userId}`);
  const userData = await customerResponse.json();


  return {
    props: {
      order: data,
      customer: userData,
    }
  }
}