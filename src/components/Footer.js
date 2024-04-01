
import FooterData from './data/footer_data.json';


const Footer = () => {  

return (

    <footer className="scene">
    <article className="content">
      <div id="socialmedia">
        <ul className="group">
        {FooterData.map((item, index) => (
          <li key={index}>
            <a href={item.href}>
              <img className="icon" src={item.src} alt={item.alt} />
            </a>
          </li>
        ))}
        </ul>      
      </div>
    </article>
</footer>

); 


}

export default Footer;
