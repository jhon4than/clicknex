# Como implantar no HostGator (Hospedagem Compartilhada)

## Problema das rotas 404

Seu site React usa React Router com rotas do lado do cliente (como `/clinicas`). Em hospedagem compartilhada, quando alguém acessa `seusite.com/clinicas`, o servidor procura por um arquivo físico chamado `clinicas` e retorna 404.

## Solução

### 1. Use o arquivo .htaccess (Apache)

O arquivo `.htaccess` já foi criado em `public/.htaccess`. Certifique-se de que ele seja enviado para o servidor na pasta raiz do seu site.

### 2. Passos para deploy no HostGator via cPanel:

1. **Build do projeto:**
   ```bash
   npm run build
   ```

2. **Acesse o cPanel** do HostGator

3. **Vá para "Gerenciador de Arquivos"**

4. **Navegue até a pasta public_html** (ou a pasta do seu domínio)

5. **Faça upload dos arquivos** da pasta `dist` (gerada pelo build):
   - Selecione todos os arquivos da pasta `dist`
   - Upload para a pasta public_html
   - **IMPORTANTE:** O arquivo `.htaccess` deve estar na raiz da pasta public_html

6. **Verifique se o .htaccess foi enviado:**
   - No Gerenciador de Arquivos, clique em "Configurações" (engrenagem)
   - Marque "Mostrar arquivos ocultos (dotfiles)"
   - Confirme que o `.htaccess` está visível

### 3. Se usar nginx

Se seu servidor usa nginx, envie o arquivo `nginx.conf` para seu provedor e peça para aplicar a configuração.

### 4. Teste as rotas

Após o deploy, teste:
- `seusite.com/` (deve funcionar)
- `seusite.com/clinicas` (deve funcionar agora)
- Atualize a página na rota `/clinicas` (deve continuar funcionando)

## Se ainda não funcionar

### Opção A: Hash Router

Se o .htaccess não funcionar, você pode mudar para Hash Router:

1. Em `src/App.tsx`, substitua:
   ```tsx
   import { BrowserRouter, Routes, Route } from "react-router-dom";
   ```
   por:
   ```tsx
   import { HashRouter as Router, Routes, Route } from "react-router-dom";
   ```

2. E substitua:
   ```tsx
   <BrowserRouter>
   ```
   por:
   ```tsx
   <Router>
   ```

3. Faça o build novamente e envie.

As URLs ficarão assim:
- `seusite.com/#/` (home)
- `seusite.com/#/clinicas` (clínicas)

### Opção B: Contate o suporte

Peça ao suporte do HostGator para:
1. Verificar se o módulo mod_rewrite está ativo
2. Permitir arquivos .htaccess na pasta
3. Aplicar a configuração nginx (se aplicável)

## Arquivos importantes

- `public/.htaccess` - Configuração Apache (já criado)
- `nginx.conf` - Configuração nginx (já criado)
- `src/App.tsx` - Configuração das rotas React

## Dica adicional

Sempre mantenha uma cópia do `.htaccess` localmente, pois alguns painéis de controle podem removê-lo acidentalmente durante atualizações.
