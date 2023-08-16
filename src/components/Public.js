import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Vin Tech Repairs!</span></h1>
            </header>
            <main className="public__main">
                <p>Located at Greenspan shopping Mall Embakasi Nairobi.</p>
                <address className="public__addr">
                    Vin Tech Repairs<br />
                    254 Donholm Greenspan<br />
                    Nairobi City, Nrb 00100<br />
                    <a href="tel:+254705423996">(070) 542-3996</a>
                </address>
                <br />
                <p>Owner: Vincent Anjiri</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public