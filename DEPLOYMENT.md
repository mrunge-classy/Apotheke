# Deployment auf dem Hetzner-Server

Dieses Projekt ist eine normale Node.js-Anwendung (`next start`) — kein Vercel- oder
Serverless-Setup nötig. Diese Anleitung geht davon aus, dass Sie einen frischen (oder
bestehenden) Hetzner-VPS mit Root- bzw. sudo-Zugriff verwenden.

## 1. Voraussetzungen auf dem Server

```bash
# Node.js 20 LTS (via NodeSource) und PM2
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs nginx
sudo npm install -g pm2
```

## 2. Repository klonen

```bash
cd /var/www
git clone <IHR_REPO_URL> apotheke-shop
cd apotheke-shop
cp .env.example .env
# .env bei Bedarf anpassen (NEXT_PUBLIC_SITE_URL etc.)
```

## 3. Build

```bash
npm ci
npm run build
```

## 4. Prozess mit PM2 starten

Das Projekt enthält bereits eine `ecosystem.config.js`:

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup   # gibt einen Befehl aus, der den Autostart beim Server-Neustart einrichtet
```

Nach einem späteren Update:

```bash
git pull
npm ci
npm run build
pm2 restart apotheke-shop
```

## 5. nginx als Reverse Proxy

Eine Beispielkonfiguration liegt unter [`deploy/nginx.conf.example`](./deploy/nginx.conf.example).

```bash
sudo cp deploy/nginx.conf.example /etc/nginx/sites-available/apotheke.zugriff.at
sudo ln -s /etc/nginx/sites-available/apotheke.zugriff.at /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

## 6. TLS mit Let's Encrypt

```bash
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d apotheke.zugriff.at
```

Certbot passt die nginx-Konfiguration automatisch für HTTPS an und richtet die
Zertifikatserneuerung ein.

## 7. DNS

Stellen Sie sicher, dass `apotheke.zugriff.at` per A/AAAA-Record auf die IP des
Hetzner-Servers zeigt, bevor Sie `certbot` ausführen.

## Laufzeitdaten

Bestellungen und Newsletter-Anmeldungen werden als JSON-Dateien unter `data/` auf dem Server
gespeichert (wird beim ersten Schreibzugriff automatisch angelegt). Dieses Verzeichnis ist
`.gitignore`t — für ein Redeploy per `git pull` bleiben bestehende Daten auf dem Server
erhalten, solange das Verzeichnis nicht gelöscht wird.

## Health-Check

Nach dem Deployment:

```bash
curl -I https://apotheke.zugriff.at
pm2 status
pm2 logs apotheke-shop
```
