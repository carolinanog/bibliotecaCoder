import { DateTime } from 'luxon'

export const dataEmprestimo = DateTime.fromISO(DateTime.now())
  .setLocale('pt-BR')
  .toFormat('yyyy-MM-dd')


export const dataDevolucao = DateTime.now()
    .plus({ week: 2})
    .setLocale('pt-BR')
    .toFormat('yyyy-MM-dd'); 
