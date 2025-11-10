# 🚀 Projeto Backend UFBANK (Node.js + TS)

Este é um projeto de simulação de um backend bancário, desenvolvido para fins acadêmicos. Ele é construído em Node.js com TypeScript e segue uma estrutura baseada em Clean Architecture.

---

## 🛠️ Pré-requisitos

Antes de começar, garanta que você tenha o **Node.js** instalado na sua máquina (versão 18 ou superior).

* [Baixar o Node.js](https://nodejs.org/)

---

## 1. ⚙️ Instalação

Você pode obter o projeto de duas formas:

### Opção A: Git (Recomendado)

Abra seu terminal e clone o repositório:

```bash
# Substitua <URL_DO_REPOSITORIO> pela URL do seu Git
git clone <URL_DO_REPOSITORIO>

# Entre na pasta do projeto
cd LAB
````

### Opção B: Baixando o ZIP

1.  Baixe o arquivo `.zip` do projeto.
2.  Extraia a pasta para o local desejado.
3.  Abra a pasta `LAB` no seu editor (VS Code) e abra um terminal.

---

## 2. 📦 Instalar Dependências

Com o terminal aberto na raiz do projeto (`LAB`), execute o comando abaixo para instalar todos os pacotes necessários (Express, TypeScript, etc.):

```bash
npm install
```

## 3. ▶️ Executar o Projeto

Para iniciar o servidor, execute:

```bash
npm start
```

## 4. 🧪 Testando a API

Com o servidor rodando, você pode testar os endpoints.

### Teste de GET (Navegador)

Para um teste rápido, abra seu navegador e acesse a rota `/hello`:

* **URL:** `http://localhost:3000/hello`
* **Resultado:** `{"message":"Hello, World!"}`

### Teste de POST (Terminal)

Rotas `POST` (que enviam dados) não podem ser testadas diretamente pela barra de endereço do navegador. Você deve usar uma ferramenta de API (como Postman, Insomnia) ou um terminal.

**Exemplo com PowerShell (Testando o `/health`):**

O comando abaixo executa uma requisição `POST` para o endpoint `/health`, enviando um array no corpo (body) da requisição.

```powershell
(curl -Method POST -Uri http://localhost:3000/health -Headers @{"Content-Type"="application/json"} -Body '{"data":[1, 2, 3, 4, 5, 6]}').Content
````

**Resultado Esperado:**

```json
{"message":"API saudável","itemsProcessed":6}
````

**Para testar o erro (array inválido):**

```powershell
(curl -Method POST -Uri http://localhost:3000/health -Headers @{"Content-Type"="application/json"} -Body '{"data":[1, 2, 3]}').Content
```

**Resultado Esperado**

```powershell
{"message":"Array deve ter mais que 4 índices (pelo menos 6 itens)."}
```
