import React from 'react';
import Link from'next/link';

export default function Header() {
  return (
    <div>
        <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">Movie Database</Link>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>
  )
}
