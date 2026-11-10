*Eduardo da silva*

# Questao 1 
# Letra A
A função calcularDesconto(valor, percentual) calcula o preço final de um produto ou serviço após a aplicação de um percentual de desconto.
# Letra b
Cenário 1: Cálculo bem-sucedido com valores válidos

Valor de entrada: valor = 200, percentual = 15

Resultado esperado: Retornar o valor 170 (15% de 200 é 30; 200 - 30 = 170).

Cenário 2: Tentativa de cálculo com valor inválido (zero ou negativo)

Valor de entrada: valor = 0, percentual = 10

Resultado esperado: Lançar uma exceção (Error) com a mensagem "Dados inválidos".

Cenário 3: Tentativa de cálculo com percentual inválido (acima de 100%)

Valor de entrada: valor = 150, percentual = 110

Resultado esperado: Lançar uma exceção (Error) com a mensagem "Dados inválidos".

# Letra C
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
})

# Questao 2 
# Letra A
tem como objetivo avaliar o desempenho de um estudante com base em uma nota numérica e retornar sua situação acadêmica ou sinalizar um erro caso o dado seja inválido

# Letra B
| Cenário | Descrição | Valor de Entrada (`nota`) | Resultado Esperado |
| :--- | :--- | :---: | :--- |
| **1. Aprovado (Acima da média)** | Testa uma nota válida superior ao critério de corte. | `8` | Retornar `"Aprovado"` |
| **2. Aprovado (Valor Limite / Boundary)** | Testa a nota exata de corte para aprovação. | `7` | Retornar `"Aprovado"` |
| **3. Reprovado** | Testa uma nota válida situada abaixo da média de corte. | `5` | Retornar `"Reprovado"` |
| **4. Exceção (Valor Inválido Inferior)** | Testa uma entrada abaixo do limite mínimo aceito. | `-1` | Lançar um erro com a mensagem `"Nota inválida"` |

# Letra C 

