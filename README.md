# 💰 Controle de Valores

Aplicação web simples e responsiva para controle de valores diários em reais (R$).  
Permite inserir lançamentos com data e valor, visualizar a soma diária e por intervalos, além de **editar** e **excluir** lançamentos já salvos.

---

## 🚀 Funcionalidades

- ➕ **Adicionar lançamentos** com data e valor em R$  
- ✏️ **Editar lançamentos** existentes  
- 🗑️ **Excluir lançamentos** indesejados  
- 📅 **Resumo diário** com soma dos valores por data  
- 📊 **Consulta por intervalo de datas**  
- 💾 Armazenamento local via **localStorage** (os dados permanecem salvos mesmo após fechar o navegador)  
- 📱 **Interface responsiva** para usar no celular ou desktop  
- 📲 Suporte a **PWA (Progressive Web App)** — pode ser instalado como aplicativo no celular

---

## 🖼️ Layout

- Campo para digitar **valor em R$** (abre teclado numérico no celular)  
- Campo de **data do lançamento**  
- Botão **Salvar**  
- Lista com lançamentos, com opções de **editar** e **deletar**  
- Resumo diário e por intervalo de datas  

---

## 📂 Estrutura do Projeto

- **controle-valores/**  
  - 📄 **index.html** — Estrutura principal da aplicação  
  - 🎨 **css/**  
    - 🎨 `style.css` — Estilos da aplicação (layout, cores, responsividade)  
  - ⚙️ **js/**  
    - 📜 `app.js` — Lógica principal (lançamentos, edição e exclusão)  
    - 💾 `storage.js` — Módulo para salvar e carregar dados no localStorage  
  - 🖼️ **icons/**  
    - 🖼️ `icon-192.png` — Ícone 192x192 px (PWA)  
    - 🖼️ `icon-512.png` — Ícone 512x512 px (PWA)  
  - 📱 **manifest.json** — Configuração PWA (nome, cores, ícones)  
  - 🔒 **sw.js** — Service Worker para cache offline  
  - 📝 **README.md** — Documentação do projeto

## 🚀 Como usar
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/controle-valores.git
   cd controle-valores

---
💡 Commits Semânticos

O projeto segue a convenção de commits semânticos. Exemplos:

- feat: criar estrutura inicial do app

- style: adicionar estilos responsivos

- feat(pwa): implementar service worker

- feat: adicionar edição e exclusão de lançamentos

- chore: configurar manifest.json para usar ícones
---
📌 Melhorias Futuras

- Exportar dados em CSV/Excel

- Filtro avançado por mês/ano

- Tema claro/escuro

- Backup automático na nuvem
