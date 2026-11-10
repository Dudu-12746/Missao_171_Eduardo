//Questao 1 C
const { calcularDesconto } = require('../src/operacoes');
describe('Testes da função calcularDesconto', () => {
  
  test('Deve calcular corretamente o valor final com um desconto válido', () => {
    const resultado = calcularDesconto(200, 15);
    expect(resultado).toBe(170);
  });
  test('Deve lançar erro "Dados inválidos" quando o valor for menor ou igual a zero', () => {
    expect(() => {
      calcularDesconto(0, 10);
    }).toThrow('Dados inválidos');
  });
  test('Deve lançar erro "Dados inválidos" quando o percentual for maior que 100', () => {
    expect(() => {
      calcularDesconto(150, 110);
    }).toThrow('Dados inválidos');
  });
//Questao 2 
})