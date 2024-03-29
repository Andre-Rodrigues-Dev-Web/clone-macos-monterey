import React, { useState, useEffect } from 'react';

const DataHoraComponent = () => {
  const [dataHoraAtual, setDataHoraAtual] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDataHoraAtual(new Date());
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  const obterDataHoraFormatada = () => {
    const diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    const diaSemana = diasSemana[dataHoraAtual.getDay()];
    const mes = meses[dataHoraAtual.getMonth()];
    const numeroDia = dataHoraAtual.getDate();
    const horas = dataHoraAtual.getHours();
    const minutos = dataHoraAtual.getMinutes();
    const segundos = dataHoraAtual.getSeconds();

    return `${diaSemana}, ${mes} ${numeroDia}, ${horas}:${minutos}:${segundos}`;
  };

  return <li>{obterDataHoraFormatada()}</li>;
};

export default DataHoraComponent;
