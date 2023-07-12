import Navbar from './components/Navbar'
import Card from './components/Card'
import Footer from './components/Footer'
import data from './data'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


export default function App() {

    const cards = data.map(item => {
        return(
            <Card
                key={item.id}
                {...item}
            />
        )
    })

    return (
        <div>
            <Navbar />
            {cards}
            <Footer />
        </div>
    )
}