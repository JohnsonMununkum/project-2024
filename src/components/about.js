//importing components
import Footer from "./Footer";
import Header from "./Header";
//header message comes from header.js same with footer footer.js
//link to instagram page

const About = ()=>{
    return(
        <div>
            <Header />
            <p>Your local streetwear & designer plug.<br></br>
                Our priority & aim is to keep our clients in the freshest apparel!</p>
            <br></br>
            <p>We strive to elevate your fashion journey to the next level, not just offer you shoes and clothes our redesigned brand is a reflection of our dedication to supplying aa premium variety of garmeents and technology.</p>
            <br></br>
            <p>Our redesigned identity is accompanied by a renewed commitment to providing outstanding customer service.Our team is here to enhance your shopping experience at every turn, offering anything from personalised styling to expert advice on the latest styles.</p>
            <br></br>
            <p>What's the delay? HIT US A DM TODAY!</p>
            <a href="https://www.instagram.com/japlugs_/profilecard/#" target="_blank" rel="nooneopener noreferrer">
           <Footer />
            </a>
        </div>
    );
}

export default About;