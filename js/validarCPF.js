export default function verificarCPF (CPF) {
    const semPontuacaoCPF = CPF.replace(/\D+/g, "")
    const verificarCPF = Array.from(semPontuacaoCPF).slice(0,9)
    for (let i = 0 ; i < 2; i++){
        let verificador = 11 - verificarCPF.reduce((acc, value, i, array) => (array.length - i + 1) * value + acc, 0) % 11
        let digito = verificador > 9 ? 0 : verificador
        verificarCPF.push(String(digito))
    }
    const validarCPF = verificarCPF.reduce((acc, value, i) => acc && (value === semPontuacaoCPF[i]), true)
    return validarCPF ? semPontuacaoCPF : validarCPF
}