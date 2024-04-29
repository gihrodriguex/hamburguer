import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <h1>Hello World</h1>
        <nav>
            <ul>
                <li>
                    <Link to="/">home</Link>
                    <Link to="/Filme1">Filme 1</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}
