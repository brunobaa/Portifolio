import './Header.css'

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Meu Portfólio</h1>
      <nav>
        <ul className="header-nav">
          <li><a href="#about">Sobre Mim</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;