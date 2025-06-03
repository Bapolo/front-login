import CriadorDeEvento from "../components/CriadorDeEvento";
import Evento from "../components/Evento";
import Footer from "../components/Footer";
import Nav from "../components/Nav";


function Home() {

    return (
        <div className="overflow-x-hidden">
            <Nav />
            <CriadorDeEvento />

            <div className="flex flex-col items-center justify-center px-4 md:flex-row md:gap-2 md:flex-wrap">
                <Evento />
                <Evento />
                <Evento />
                <Evento />
                <Evento />
                <Evento />
                <Evento />
                <Evento />
            </div>

            <Footer />
        </div>
    )
}

export default Home