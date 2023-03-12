import React from 'react'

export default function Customers(props) {
  return (
    <>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{props.customer.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">{props.customer.description}</p>
        </div>
      </div>
    </>
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