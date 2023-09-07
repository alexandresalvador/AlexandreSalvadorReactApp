function Relogio() {

  function pegarHoraAtual() {
    return new Date().toLocaleString("pt-br");
  }

  return (
    <div>
      <h1>Relogio</h1>
      <p>Hora Atual: {pegarHoraAtual()}</p>
    </div>
  );
}

export default Relogio;