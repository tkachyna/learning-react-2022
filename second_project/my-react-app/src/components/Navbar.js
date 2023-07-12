import world from '../images/world.png'

export default function Navbar() {
    return (
        <dev>
            <nav className="navbar">
                <img src={world} className="navbar--image"/>
                <div className="navbar--title" alt='image'>my travel journal</div>
            </nav>
        </dev>
    )
}