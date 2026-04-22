function Greetings({ lang, children }) {
  const messages = {
    fr: "Bonjour",
    en: "Hello",
    de: "Hallo",
    es: "Hola",
  };
  return (
    <div>
      <p>
        {messages[lang]}
        {children}
      </p>
    </div>
  );
}

export default Greetings;
