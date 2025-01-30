import Header from './components/Header.tsx';
import About from './components/About.tsx';
import Projects from './components/Projects.tsx';
import Skills from './components/Skills.tsx';
import Contact from './components/Contact.tsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default App;
