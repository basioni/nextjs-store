import Link from 'next/link';
import React from 'react'

export default function Products(props) {
  return (
    <div class="container-fluid .align-self-center">
      <div class="row">
        <div class="col">
          <h2 class="text-start  gx-5">Products </h2>
          <hr/>
          <table class="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Brand</th>
                <th scope="col">Stock</th>
                <th scope="col">Price</th>
                <th scope="col">Rating</th>
              </tr>
            </thead>
            <tbody>
              {props.products.map(post => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td><img src={post.thumbnail} height="50" width="50" /></td>
                  <td><Link href={`/products/${post.id}`} key={post.id}>{post.title}</Link></td>
                  <td>{post.brand}</td>
                  <td>{post.stock}</td>
                  <td>${post.price}</td>
                  <td>${post.rating}</td>
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
  const res = await fetch("https://dummyjson.com/products?limit=12");
  const data = await res.json();

  return {
    props: {
      products: data.products
    }
  }
}


