import logo from '../../Images/logoApun.png';
// import '../../CSS/style.css';
const Header = () => {
  return (
    <div style={{marginBottom: "65px"}}>
      <div className="banner-style py-1">
        <img src={logo} alt='logoimage' className="logo-style px-3" />
        <h1 className="heading1">ProjectOPedia</h1>        
      </div>
    </div>
  );
};

export default Header;
