import BlogList from "components/home/BlogList";
import Cta from "components/home/Cta";
import Features from "components/home/Features";
import Header from "components/home/Header";
import Insentive from "components/home/Insentive";
import LogoCloud from "components/home/LogoCloud";
import UseCases from "components/home/UseCases";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layout/Layout";
import { useEffect } from "react";

function Home() {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[]);
    
    return (
        <Layout>
            <Navbar/>
            <div data-scroll-section className="pt-28">
                <Header/>
                <Insentive/>
                <UseCases/>
                <Features/>
                <Cta/>
                <LogoCloud/>
                <BlogList/>
            </div>
                <Footer/>
        </Layout>
    );
}

export default Home;