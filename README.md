# Niches Hunter Paid SignUp Service 🎯

Service Node.js qui envoie automatiquement des emails de bienvenue aux nouveaux clients payants de Niches Hunter.

## 🏗️ Architecture

- **Écoute en temps réel** les nouveaux INSERT dans la table `customers` via Supabase Realtime
- **Envoie un email personnalisé** selon le plan (Monthly vs Lifetime)
- **Notifications Telegram** pour chaque nouveau client

## 📊 Table Supabase utilisée

### Table `customers` (source)
```sql
CREATE TABLE customers (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  user_id UUID,
  stripe_customer_id TEXT NOT NULL,
  stripe_subscription_id TEXT,
  plan_type TEXT NOT NULL, -- 'monthly' ou 'lifetime'
  status TEXT DEFAULT 'active',
  current_period_start TIMESTAMPTZ,
  current_period_end TIMESTAMPTZ,
  cancel_at_period_end BOOLEAN DEFAULT false,
  canceled_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

## 🔧 Variables d'environnement

```env
# Supabase
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=xxx

# Email (Resend)
RESEND_API_KEY=xxx
EMAIL_FROM=support@arianeconcept.fr

# Telegram (optionnel)
TELEGRAM_BOT_TOKEN=xxx
TELEGRAM_CHAT_ID=xxx

# App
DASHBOARD_URL=https://nicheshunter.app/niches
SUPPORT_EMAIL=support@nicheshunter.app

# Server
PORT=3000
NODE_ENV=production
```

## 🚀 Déploiement Railway

1. **Créer un nouveau projet** sur Railway
2. **Connecter le repo GitHub** ou déployer via CLI
3. **Ajouter les variables d'environnement** dans Railway
4. **Le service démarre automatiquement** et écoute les nouveaux clients

## 📝 Développement local

```bash
# Installer les dépendances
npm install

# Créer le fichier .env avec les variables ci-dessus

# Lancer en mode développement
npm run dev

# Build pour production
npm run build
npm start
```

## 📧 Templates d'emails

### Monthly Plan
- Badge: ⭐ PRO MEMBER
- Titre: "You're now a Pro Hunter! 🎯"
- Design moderne et sobre

### Lifetime Plan
- Badge: 🏆 LIFETIME ACCESS
- Titre: "You're a Lifetime Hunter! 🏆"
- Section spéciale "Lifetime Legend" 💎
- Design premium avec dorure

## 🔄 Flux de fonctionnement

```
1. Nouveau client payant → INSERT dans `customers`
                              ↓
2. Supabase Realtime → Notification au serveur
                              ↓
3. Envoi email personnalisé (monthly/lifetime)
                              ↓
4. Notification Telegram 📱
```

## ⚠️ Prérequis Supabase

**Activer Realtime sur la table `customers`** :
1. Supabase Dashboard → Database → Replication
2. Activer la replication pour la table `customers`

## 📡 Endpoints

| Méthode | Route | Description |
|---------|-------|-------------|
| GET | `/health` | Health check pour Railway |

## 📊 Monitoring

- Logs détaillés dans Railway
- Notifications Telegram pour chaque événement
- Health check automatique
