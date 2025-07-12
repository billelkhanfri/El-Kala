import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const legalLinks = [ {
    id:1 , name: "Mentions légales", link : "/mentionslegales"
},
{ id: 2 , name :"Politique de confidentialité", link : "/politiqueconfidentialite"},
{ id: 3 , name :"Conditions d'utilisation", link : "/conditionsutilisation"},]

const socialLinks = [
  { id: 1, name: <FaFacebook />, link: "https://www.facebook.com/" },
  { id: 2, name: <FaXTwitter />, link: "https://www.twitter.com/" },
  { id: 3, name: <FaYoutube />, link: "https://www.youtube.com/" },
];
function Footer() {
  return (
    <footer className='w-full bg-white text-coal   mb-8'>
        <div className='max-w-6xl  mx-auto flex flex-col md:flex-row justify-between  gap-12 md:gap-8 px-6 py-12 items-center'>
            <nav className=' flex gap-6 items-center text-center text-md'>
                {legalLinks.map((link)=> (
                    <a key = {link.id } href = {link.link}> {link.name}</a>
                ))}
            </nav>
            <nav className='flex justify-between gap-14 md:gap-6 text-4xl items-center text-coal'>
                {socialLinks.map((link)=> (
                    <a
                     key= {link.id} 
                     href = {link.link}
                     target='_blank'
                     className='hover:text-primaryBlue transition-colors duration-300'
                     > {link.name}</a>
                ))}
            </nav>
        </div>

    </footer>
  );
}

export default Footer