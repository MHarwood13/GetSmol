import Logo from './Logo.png';
import NavLink from '../NavLinks';


const Header = () => {

    return (
        <div className="header bg-gray-300 grid grid-cols-2 md:grid-cols-3 content-center justify-items-center">
            <div className='logo col-span-1 md:self-start'>
                <img className='h-[8rem] md:h-[12rem] xl:h-[20rem]' src={Logo} alt='logo' />
            </div>
            <h1 className='text-gray-600 text-3xl self-center hidden'>"Sometimes smaller is better" <br />-Aristotle or someone</h1>
            <div className='col-start-2 md:col-start-3 self-center justify-self-center'>
            <NavLink />
            </div>
        </div>

    );
};

export default Header;
