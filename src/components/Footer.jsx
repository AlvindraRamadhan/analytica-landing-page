const Footer = () => {
  return (
    <footer className="bg-dark-text text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>Didesain & Dibuat dengan 💙 oleh Alvindra Ramadhan.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="https://github.com/AlvindraRamadhan"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary transition-colors"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/alvindra-ramadhan"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
