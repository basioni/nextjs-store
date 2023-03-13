import React from 'react'

export default function Customers(props) {
  return (
    <div class="container-fluid align-self-center">
      <div class="row">
        <div class="col">
          <h1 class="text-start  gx-5">{props.customer.username} </h1>
          <hr />
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img src={props.customer.image} class="img-fluid rounded-start" alt={props.customer.firstName} />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <table class="table">
                    <tbody>
                      <tr>
                        <th scope="row" width="25%"><b>ID:</b></th>
                        <td>{props.customer.id}</td>
                      </tr>
                      <tr>
                        <th scope="row"><b>Username:</b></th>
                        <td>{props.customer.username}</td>
                      </tr>
                      <tr>
                        <th scope="row"><b>Name:</b></th>
                        <td>{props.customer.firstName + " " + props.customer.maidenName }</td>
                      </tr>
                      <tr>
                        <th scope="row"><b>Phone:</b></th>
                        <td>{props.customer.phone }</td>
                      </tr>
                      <tr>
                        <th scope="row"><b>Job Title:</b></th>
                        <td>{props.customer.company.title }</td>
                      </tr>
                      <tr>
                        <th scope="row"><b>Department:</b></th>
                        <td>{props.customer.company.department }</td>
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
  const res = await fetch(`https://dummyjson.com/users?limit=12`);
  const data = await res.json();

  const paths = data.users.map(d => {
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
  const res = await fetch(`https://dummyjson.com/users/${context.params.id}`);
  const data = await res.json();

  return {
    props: {
      customer: data
    }
  }
}