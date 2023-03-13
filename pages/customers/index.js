import Link from 'next/link';
import React from 'react'

export default function Customers(props) {
  return (
    <div class="container-fluid align-self-center">
      <div class="row">
        <div class="col">
          <h2 class="text-start  gx-5">Customers </h2>
          <hr/>
          <table class="table table-striped table-sm text-center">
            <thead>
              <tr class="text-center">
                <th scope="col">ID</th>
                <th scope="col">Username</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
                <th scope="col">City</th>
                
              </tr>
            </thead>
            <tbody >
              {props.customers.map(post => (
                <tr key={post.id} class="align-middle">
                  <td>{post.id}</td>
                  <td><Link href={`/customers/${post.id}`} key={post.id}><img src={post.image} height="50" width="50" />{post.username}</Link></td>
                  <td><Link href={`/customers/${post.id}`} key={post.id}>{post.firstName} {post.maidenName}</Link></td>
                  <td>{post.email}</td>
                  <td>{post.phone}</td>
                  <td>{post.address.address}</td>
                  <td>{post.address.city}</td>
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
  const res = await fetch("https://dummyjson.com/users?limit=12");
  const data = await res.json();

  return {
    props: {
      customers: data.users
    }
  }
}


