# 🚀 Configuração Nginx para React SPA - ClickNex

## ✅ PROBLEMA IDENTIFICADO

Você está usando servidor VPS/dedicado com nginx (não hospedagem compartilhada)! A configuração precisa ser ajustada para React Router.

## 🔧 Mudanças Necessárias

### 1. **Remover PHP** (não precisa para React)
- Comente: `# include enable-php-00.conf;`

### 2. **Adicionar suporte a SPA** (Single Page Application)
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

### 3. **Remover página 404 customizada**
- Comente: `# error_page 404 /404.html;`

## 📋 Passos para Aplicar

### Opção 1: Via Painel do Servidor
1. Acesse o painel de controle do seu servidor
2. Vá em **Sites** → **clicknex.com.br** → **Configurar**
3. Substitua toda a configuração pela do arquivo `nginx-config-corrigido.conf`

### Opção 2: Via SSH
```bash
# Conecte ao servidor
ssh root@seu-servidor

# Backup da config atual
cp /www/server/panel/vhost/nginx/clicknex.com.br.conf /www/server/panel/vhost/nginx/clicknex.com.br.conf.backup

# Editar arquivo
nano /www/server/panel/vhost/nginx/clicknex.com.br.conf

# Colar a nova configuração
# Salvar: Ctrl+O → Enter
# Sair: Ctrl+X

# Testar configuração
nginx -t

# Recarregar nginx
systemctl reload nginx
# ou
nginx -s reload
```

## 🎯 O que foi corrigido:

1. **React Router Support**: `try_files $uri $uri/ /index.html`
   - Agora `/clinicas` vai funcionar!
   - Refresh em qualquer rota funciona

2. **Cache Otimizado**:
   - Imagens: 30 dias cache
   - JS/CSS: 12 horas cache

3. **Segurança**:
   - Headers de segurança adicionados
   - Bloqueio de arquivos sensíveis

4. **Performance**:
   - Compressão gzip (se ativo no servidor)
   - Cache control headers

## 🧪 Teste Aplicar Config

Após aplicar a configuração:

1. **Limpe cache do navegador** (Ctrl+F5)
2. **Teste as URLs**:
   - ✅ `https://clicknex.com.br/`
   - ✅ `https://clicknex.com.br/clinicas`
   - ✅ Refresh na página `/clinicas`

3. **Verifique logs** se houver erro:
   ```bash
   tail -f /www/wwwlogs/clicknex.com.br.error.log
   ```

## ⚡ Se ainda não funcionar:

### Verifique:
1. **Permissões dos arquivos**:
   ```bash
   chown -R www:www /www/wwwroot/clicknex/dist
   chmod -R 755 /www/wwwroot/clicknex/dist
   ```

2. **Se o nginx não recarregar**:
   ```bash
   # Verificar erro
   nginx -t
   
   # Forçar reload
   systemctl restart nginx
   ```

3. **Se usar Cloudflare/Proxy**:
   - Limpe cache do Cloudflare
   - Desative temporariamente para testar

## 📁 Estrutura Esperada:

```
/www/wwwroot/clicknex/dist/
├── index.html
├── assets/
│   ├── index-xxxx.js
│   └── index-xxxx.css
├── favicon.ico
├── robots.txt
└── lovable-uploads/
    └── 61e09eab-7455-483f-aa3e-e6fee0f382f7.png
```

## ✅ Resumo

- **Servidor**: VPS/Dedicado com nginx ✅
- **Framework**: React SPA ✅  
- **Problema**: Config nginx sem suporte SPA ✅
- **Solução**: `try_files $uri $uri/ /index.html` ✅

Agora seu site vai funcionar perfeitamente com todas as rotas!
