import React from 'react'
import "./NavBar.css"

import { Link } from 'react-router-dom'
import {BookAIcon} from "lucide-react"

export default function NavBar() {
  return (
    <nav>

        <div id="LogoSection">
            <h2>The Valut Of Knowledge</h2>
            <BookAIcon/>
        </div>

        <div id="LinksSection">
            <Link to="/">Home</Link>
            <Link to="/books">Books</Link>
            <Link to="/manage">Manage</Link>
        </div>

    </nav>
  )
}
