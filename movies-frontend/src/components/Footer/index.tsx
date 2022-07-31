import { Link } from 'react-router-dom'
import bg from '../../assets/footer-bg.jpg'
import logo from '../../assets/play.png'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer' style={{ backgroundImage: `url(${bg})` }}>
      <div className='footer__content container'>
        <div className='footer__content__logo'>
          <div className='logo'>
            <img src={logo} alt='' />
            <Link to='/'>Sadge</Link>
          </div>
        </div>
        <div className='footer__content__menus'>
          <div className='footer__content__menu'>
            <Link to='/'>Home</Link>
            <a
              href='https://discord.gg/Xdbfxe8wHj'
              target='_blang'
              rel='noreferrer'
            >
              Contact Us
            </a>
            <Link to='/'>Term of services</Link>
            <a
              href='https://discord.gg/Xdbfxe8wHj'
              target='_blang'
              rel='noreferrer'
            >
              About Us
            </a>
          </div>
          <div className='footer__content__menu'>
            <Link to='/'>Live</Link>
            <Link to='/'>FAQ</Link>
            <Link to='/'>Premium</Link>
            <Link to='/'>Pravacy policy</Link>
          </div>
          <div className='footer__content__menu'>
            <Link to='/'>You must watch</Link>
            <Link to='/'>Recent release</Link>
            <a
              href='https://www.imdb.com/chart/top/'
              target='_blank'
              rel='noreferrer'
            >
              Top IMDB
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
