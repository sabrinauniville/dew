export function criarFuncoes(): string {
  // CONCEITO: Criar funções (Function × Arrow)
  function somaComFunction(a: number, b: number): number {
    return a + b;
  }

  const somaComArrow = (a: number, b: number): number => a + b;

  return `Function: ${somaComFunction(2, 3)} | Arrow: ${somaComArrow(2, 3)}`;
}

export function explicarThis(): string {
  // CONCEITO: Explicar this
  const pessoa = {
    nome: 'Ada',
    saudacao() {
      return `Olá, ${this.nome}`;
    }
  };

  const saudacaoComBind = pessoa.saudacao.bind(pessoa);

  return `Método: ${pessoa.saudacao()} | com bind: ${saudacaoComBind()}`;
}

export function criarClosure(): string {
  // CONCEITO: Closures
  const contador = () => {
    let valor = 0;

    return () => {
      valor += 1;
      return valor;
    };
  };

  const incrementar = contador();

  return `Primeira chamada: ${incrementar()} | Segunda chamada: ${incrementar()}`;
}

export function usarDestructuring(): string {
  // CONCEITO: Destructuring
  const dados = {
    titulo: 'APOD',
    autor: 'NASA',
    data: '2024-01-01'
  };

  const { titulo, autor } = dados;
  const numeros = [10, 20, 30];
  const [primeiro] = numeros;

  return `Título: ${titulo} | Autor: ${autor} | Primeiro número: ${primeiro}`;
}

export function usarSpreadRest(): string {
  // CONCEITO: Spread/Rest
  const base = { titulo: 'APOD', data: '2024-01-01' };
  const completo = { ...base, autor: 'NASA' };

  const somar = (...numeros: number[]): number => numeros.reduce((acumulador, numero) => acumulador + numero, 0);

  return `Objeto completo: ${JSON.stringify(completo)} | Soma: ${somar(1, 2, 3, 4)}`;
}

export function usarJson(): string {
  // CONCEITO: JSON
  const objeto = { titulo: 'APOD', autor: 'NASA' };
  const texto = JSON.stringify(objeto);
  const restaurado = JSON.parse(texto) as { titulo: string; autor: string };

  return `Texto: ${texto} | Restaurado: ${restaurado.titulo}/${restaurado.autor}`;
}

export function mostrarSincronismo(): string {
  // CONCEITO: Sincronismo
  const resultado = 2 + 2;
  return `Operação síncrona concluída: ${resultado}`;
}

export function demonstrarAssincronismo(): Promise<string> {
  // CONCEITO: Assincronismo
  return new Promise((resolve) => {
    setTimeout(() => resolve('Resposta assíncrona após 100ms'), 100);
  });
}

export function usarCallback(callback: (mensagem: string) => string): string {
  // CONCEITO: Callback
  return callback('Callback executado');
}

export function callbackHellDemo(): Promise<string> {
  // CONCEITO: Callback Hell
  return new Promise((resolve) => {
    setTimeout(() => {
      const etapa1 = 'Etapa 1 concluída';
      setTimeout(() => {
        const etapa2 = 'Etapa 2 concluída';
        setTimeout(() => resolve(`${etapa1} -> ${etapa2} -> Etapa 3 concluída`), 50);
      }, 50);
    }, 50);
  });
}

export function carregarDadosComPromise(): Promise<string> {
  // CONCEITO: Promise
  return new Promise((resolve) => {
    setTimeout(() => resolve('Promise resolvida com sucesso'), 100);
  });
}

export async function carregarDadosComAsyncAwait(): Promise<string> {
  // CONCEITO: Async/Await
  const resultado = await carregarDadosComPromise();
  return `Async/Await: ${resultado.toLowerCase()}`;
}
