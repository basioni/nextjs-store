import Link from 'next/link';
import React from 'react'

export default function Orders(props) {
  return (
    <div class="container-fluid .align-self-center">
      <div class="row">
        <div class="col">
          <h2 class="text-start  gx-5">Orders</h2>
          <hr/>
          <table class="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">user</th>
                <th scope="col">total</th>
                <th scope="col">Discounted Total</th>
                <th scope="col">Total Products</th>
                <th scope="col">Total Quantity</th>
                <th scope="col">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {props.orders.map(post => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td><Link href={`/customers/${post.id}`} key={post.id}>{post.userId}</Link></td>
                  <td>${post.total}</td>
                  <td>${post.discountedTotal}</td>
                  <td>{post.totalProducts}</td>
                  <td>{post.totalQuantity}</td>
                  <td><Link href={`/orders/${post.id}`} key={post.id}>View</Link></td>
                </tr>
              )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/carts?limit=12");
  const data = await res.json();

  return {
    props: {
      orders: data.carts
    }
  }
}


