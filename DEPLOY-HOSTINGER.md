# Deploy na Hostinger (Hospedagem Compartilhada) - Passo a Passo

## ✅ Hostinger SUPORTA React!

A hospedagem compartilhada da Hostinger suporta React sem problemas. Você só precisa fazer o upload dos arquivos estáticos (build) e configurar o .htaccess.

## 📋 Passo a Passo Detalhado

### 1. Build do Projeto (JÁ FEITO)
```bash
npm run build
```
Isso criou a pasta `dist` com todos os arquivos necessários.

### 2. Acessando o cPanel da Hostinger

1. Faça login no painel da Hostinger
2. Vá para **Hospedagem** → **Gerenciar**
3. Clique em **cPanel** ou **Painel de Controle**

### 3. Usando o Gerenciador de Arquivos

1. No cPanel, procure por **Gerenciador de Arquivos** (File Manager)
2. Navegue até a pasta `public_html` (ou subpasta do seu domínio)
3. **IMPORTANTE:** Clique em **Configurações** (ícone de engrenagem no canto superior direito)
4. Marque **"Mostrar arquivos ocultos (dotfiles)"**
5. Clique em **"Salvar"**

### 4. Upload dos Arquivos

#### Método 1: Upload Completo
1. Na pasta `public_html`, delete todos os arquivos antigos (se houver)
2. Clique em **"Upload"** na barra superior
3. Selecione TODOS os arquivos da pasta `dist` do seu computador:
   - index.html
   - .htaccess (IMPORTANTE!)
   - favicon.ico
   - robots.txt
   - pasta `assets` (completa)
   - pasta `lovable-uploads` (completa)
   - placeholder.svg

#### Método 2: Compactar e Enviar
1. No seu computador, compacte a pasta `dist` em `.zip`
2. No Gerenciador de Arquivos, clique em **"Upload"**
3. Envie o arquivo `.zip`
4. Clique com o botão direito no arquivo zipado
5. Selecione **"Extract"** (Extrair)
6. Mova os arquivos para `public_html` se necessário

### 5. Verificação CRUCIAL

Após o upload, verifique se:
- ✅ O arquivo `.htaccess` está na pasta `public_html`
- ✅ A pasta `assets` foi enviada completa
- ✅ O `index.html` está na raiz

### 6. Teste as Rotas

Espere 1-2 minutos para propagar e teste:
- `seusite.com/` (deve carregar)
- `seusite.com/clinicas` (deve carregar agora)
- Atualize a página em `/clinicas` (deve continuar funcionando)

## 🔧 Se Ainda Der Erro 404

### Opção 1: Verificar Permissões
1. No Gerenciador de Arquivos, clique com o botão direito no `.htaccess`
2. Selecione **"Change Permissions"** (Alterar Permissões)
3. Defina como **644**
4. Repita para `index.html` (644)

### Opção 2: Editar .htaccess Direto no cPanel
1. Clique com o botão direito no `.htaccess`
2. Selecione **"Edit"** (Editar)
3. Substitua TODO o conteúdo por:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

### Opção 3: Usar Hash Router (Plano B)

Se nada funcionar, mude para Hash Router:

1. No seu código, em `src/App.tsx`:
   ```tsx
   // Substitua
   import { BrowserRouter, Routes, Route } from "react-router-dom";
   
   // Por
   import { HashRouter as Router, Routes, Route } from "react-router-dom";
   ```

2. E substitua:
   ```tsx
   <BrowserRouter>
   ```
   Por:
   ```tsx
   <Router>
   ```

3. Faça o build novamente:
   ```bash
   npm run build
   ```

4. Envie os arquivos novamente

As URLs ficarão:
- `seusite.com/#/`
- `seusite.com/#/clinicas`

## 📞 Contato com Suporte Hostinger

Se ainda não funcionar, contate o suporte e diga:
> "Estou tentando hospedar uma aplicação React SPA (Single Page Application) e preciso que o módulo mod_rewrite esteja ativo para que o arquivo .htaccess funcione corretamente com redirecionamento de rotas."

## 🚀 Dicas Adicionais

1. **Limpe Cache:** Após o upload, limpe o cache do navegador (Ctrl+F5)
2. **Espere Propagação:** Pode levar até 5 minutos para as alterações surtirem efeito
3. **Erro 500?** Verifique se o .htaccess está correto (sem caracteres extras)
4. **Sempre mantenha backup** dos arquivos antes de substituir

## ✅ Checklist Final

- [ ] Build concluído (`npm run build`)
- [ ] Arquivos da pasta `dist` prontos
- [ ] Acesso ao cPanel da Hostinger
- [ ] Arquivos ocultos visíveis no Gerenciador
- [ ] Upload completo para `public_html`
- [ ] `.htaccess` presente na pasta raiz
- [ ] Permissões definidas (644)
- [ ] Teste das rotas funcionando

A Hostinger suporta React sem problemas! O segredo está no .htaccess correto e no upload completo dos arquivos.
