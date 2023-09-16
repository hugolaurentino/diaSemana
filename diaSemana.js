const diaDaSemana = 7;

console.log(`
${diaDaSemana == 1 ? 'Domingo' :
        diaDaSemana == 2 ? 'Segunda Feira' :
            diaDaSemana == 3 ? 'Terça Feira' :
                diaDaSemana == 4 ? 'Quarta Feira' :
                    diaDaSemana == 5 ? 'Quinta Feira' :
                        diaDaSemana == 6 ? 'Sexta Feira' :
                            diaDaSemana == 7 ? 'Sábado' :
                                'O dia da semana informado não é válido.'
    }
`);