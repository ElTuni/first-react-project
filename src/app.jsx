import Info from "/src/info.jsx"
import About from "/src/about.jsx"
import Interest from "/src/interest.jsx"
import Footer from "/src/footer.jsx"

export default function App() {
    return (
        <>
            <main>
                <Info />
                <section className="section-content container">
                    <About />
                    <Interest />
                </section>
            </main>
            <Footer />
        </>
    )
}