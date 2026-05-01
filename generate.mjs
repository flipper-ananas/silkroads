import https from 'https';
import fs from 'fs';

const prompt = `Tu es un développeur senior React/Next.js.
Stack du projet : Next.js 14, TypeScript, Tailwind CSS, App Router.

User Story : ${process.env.ISSUE_TITLE}

Description et critères d'acceptance :
${process.env.ISSUE_BODY}

Génère un composant React complet pour cette feature.
Réponds UNIQUEMENT avec le code TypeScript, sans explication, sans balises markdown.
Le fichier doit être un composant Next.js valide en TypeScript.`;

const data = JSON.stringify({
  model: 'claude-sonnet-4-6',
  max_tokens: 4096,
  messages: [{ role: 'user', content: prompt }]
});

const options = {
  hostname: 'api.anthropic.com',
  path: '/v1/messages',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': process.env.ANTHROPIC_API_KEY,
    'anthropic-version': '2023-06-01',
    'Content-Length': Buffer.byteLength(data)
  }
};

const req = https.request(options, (res) => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    const response = JSON.parse(body);
    const code = response.content[0].text;
    fs.writeFileSync('generated-component.tsx', code);
    console.log('Code généré avec succès');
  });
});

req.on('error', (e) => {
  console.error('Erreur API:', e);
  process.exit(1);
});

req.write(data);
req.end();
