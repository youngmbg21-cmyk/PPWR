/**
 * ==========================================================================
 * PPWR LEARNING HUB — Reference App Data
 * File: reference-app-data.js
 *
 * PURPOSE
 * -------
 * This module provides a curated set of real-world reference examples
 * (Learning Cards + Compliance Scenarios) drawn from a reference
 * implementation of the PPWR platform.  These examples are merged into
 * the knowledge block sent to Claude alongside your own platform cards,
 * so Claude can cite concrete, working examples when answering questions
 * about how the PPWR Learning Hub is built, configured, or extended.
 *
 * HOW TO USE
 * ----------
 * In chat.js (or worker.js), import this file and spread the arrays into
 * the context before calling buildKnowledgeContext():
 *
 *   import { referenceCards, referenceScenarios } from './reference-app-data.js';
 *
 *   // Inside the handler, after extracting cards / scenarios from the request:
 *   const allCards     = [...cards,     ...referenceCards];
 *   const allScenarios = [...scenarios, ...referenceScenarios];
 *   const knowledgeBlock = buildKnowledgeContext(allCards, allScenarios);
 *
 * Card id values start at 900 to avoid colliding with your platform cards.
 * Scenario id values start at 900 for the same reason.
 * ==========================================================================
 */

// ---------------------------------------------------------------------------
// REFERENCE LEARNING CARDS
// Each card mirrors the LearningCard shape used by buildKnowledgeContext:
//   { id: number, title: string, category: string, content: string }
// ---------------------------------------------------------------------------
export const referenceCards = [
  {
        id: 901,
        title: 'Reference App: Project Structure',
        category: 'Reference Implementation',
        content:
                'The reference PPWR app uses a flat file layout: index.html (frontend), ' +
                'chat.js (Next.js API route at pages/api/chat.js), worker.js (Cloudflare / ' +
                'Netlify serverless function), and PROXY_GUIDE.md (deployment docs). ' +
                'There is no build step for the frontend — index.html is self-contained ' +
                'with Tailwind CSS loaded from CDN and Chart.js loaded from jsDelivr. ' +
                'The proxy files use only built-in Node 18+ fetch, so the only npm ' +
                'dependency is next (for the Next.js path).',
  },
  {
        id: 902,
        title: 'Reference App: Secure Proxy Pattern',
        category: 'Reference Implementation',
        content:
                'The reference app never exposes the Anthropic API key in the browser. ' +
                'The frontend calls POST /api/chat with { query, sessionToken, plan, context }. ' +
                'The server reads process.env.ANTHROPIC_API_KEY, builds a RAG knowledge block ' +
                'from the cards and scenarios in context, and forwards a single request to ' +
                'api.anthropic.com/v1/messages. The browser only ever receives ' +
                '{ answer, sourceId, sourceLabel, sourceVerified, timestamp }. ' +
                'Example curl call: ' +
                'curl -X POST http://localhost:3000/api/chat -H "Content-Type: application/json" ' +
                '-d \'{"query":"What is the PFAS ban?","sessionToken":"ppwr-session-abc123def456","plan":"growth","context":{"cards":[...],"scenarios":[]}}\'',
  },
  {
        id: 903,
        title: 'Reference App: Session Token Validation',
        category: 'Reference Implementation',
        content:
                'The reference app uses a lightweight placeholder validator: ' +
                'isValidSessionToken(token) returns true when the token starts with ' +
                '"ppwr-session-" and is longer than 20 characters. ' +
                'In production this should be replaced with real JWT verification via ' +
                'Supabase Auth or Auth0. Example replacement: ' +
                'const { data: { user }, error } = await supabase.auth.getUser(bearerToken); ' +
                'if (error || !user) return res.status(401).json({ error: "Unauthorized" });',
  },
  {
        id: 904,
        title: 'Reference App: RAG Knowledge Block Format',
        category: 'Reference Implementation',
        content:
                'buildKnowledgeContext(cards, scenarios) serialises cards as: ' +
                '[CARD id="<n>" category="<cat>"] <title>: <content> ' +
                'and scenarios as: ' +
                '[SCENARIO id="<n>" difficulty="<diff>"] <title>: <situation>, ' +
                'Best action: <text>, Why: <feedback>, Legal reference: <ref>. ' +
                'The full block is injected between <knowledge> ... </knowledge> XML tags ' +
                'inside the system prompt so Claude only draws on platform content. ' +
                'To add reference app examples simply spread referenceCards and ' +
                'referenceScenarios into the arrays before calling buildKnowledgeContext.',
  },
  {
        id: 905,
        title: 'Reference App: Source Transparency Fields',
        category: 'Reference Implementation',
        content:
                'Every API response includes sourceId (e.g. "card-2" or "scenario-5"), ' +
                'sourceLabel (human-readable citation), sourceVerified (true when Claude ' +
                'cited a specific module ID, false for general answers), and timestamp ' +
                '(ISO 8601). In the UI, sourceVerified: true renders a green checkmark ' +
                'badge; false renders a pin icon. Reference app cards use ids 901–999 ' +
                'so their sourceId values look like "card-901" through "card-999".',
  },
  {
        id: 906,
        title: 'Reference App: Starter Quota Enforcement',
        category: 'Reference Implementation',
        content:
                'The reference app enforces a server-side quota for the "starter" plan. ' +
                'STARTER_LIMIT = 3 requests per session. A Map called quotaStore tracks ' +
                'usage in memory (lost on cold start). For production replace with a ' +
                'Supabase row or Upstash Redis entry. When the limit is hit the proxy ' +
                'returns HTTP 429 { error: "Quota exceeded", upgradeRequired: true }. ' +
                'Growth and Pro plans skip the quota check entirely.',
  },
  {
        id: 907,
        title: 'Reference App: Cloudflare Worker Deployment',
        category: 'Reference Implementation',
        content:
                'To deploy the reference app as a Cloudflare Worker: ' +
                '1) npm install -g wrangler && wrangler login. ' +
                '2) Create wrangler.toml with name="ppwr-chat-proxy", main="worker.js", ' +
                'compatibility_date="2024-01-01". ' +
                '3) wrangler secret put ANTHROPIC_API_KEY (paste key when prompted). ' +
                '4) wrangler deploy. ' +
                '5) In index.html set PROXY_ENDPOINT to your worker URL. ' +
                'For production tighten CORS: change Access-Control-Allow-Origin: "*" ' +
                'to your exact domain.',
  },
  {
        id: 908,
        title: 'Reference App: Next.js / Vercel Deployment',
        category: 'Reference Implementation',
        content:
                'To deploy the reference app on Vercel: ' +
                '1) Place chat.js at pages/api/chat.js inside a Next.js project. ' +
                '2) Run npm install next react react-dom (no other deps needed). ' +
                '3) Push to GitHub. ' +
                '4) In Vercel dashboard → Settings → Environment Variables add ' +
                'ANTHROPIC_API_KEY with your key, scoped to Production + Preview + Development. ' +
                '5) Redeploy. The API route is available at /api/chat with zero extra config. ' +
                'Local dev: npm run dev, then POST to http://localhost:3000/api/chat.',
  },
  ];

// ---------------------------------------------------------------------------
// REFERENCE SCENARIOS
// Each scenario mirrors the Scenario shape used by buildKnowledgeContext:
//   { id, title, difficulty, situation, choices: [{ text, correct, feedback, legalRef }] }
// ---------------------------------------------------------------------------
export const referenceScenarios = [
  {
        id: 901,
        title: 'Adding a New Learning Card to the Reference App',
        difficulty: 'beginner',
        situation:
                'You want to add a new PPWR topic to the PPWR Learning Hub. ' +
                'Where and how do you add it so Claude can reference it?',
        choices: [
          {
                    text:
                                'Add the card object to the cards array in index.html (or your ' +
                                'platform data store) and pass it in context.cards when calling ' +
                                'POST /api/chat. Also add it to reference-app-data.js referenceCards ' +
                                'if it should be available server-side without a client payload.',
                    correct: true,
                    feedback:
                                'Correct. Cards live in context.cards sent from the browser. ' +
                                'The proxy merges them with referenceCards before building the ' +
                                'knowledge block, so Claude can cite the new card immediately.',
                    legalRef: 'PPWR Dev Guide — reference-app-data.js, card id 904',
          },
          {
                    text: 'Edit the SYSTEM_PROMPT string directly in chat.js.',
                    correct: false,
                    feedback:
                                'Avoid hardcoding content in the system prompt. Use the card/scenario ' +
                                'data structures so content is citeable and auditable.',
                    legalRef: '',
          },
              ],
  },
  {
        id: 902,
        title: 'Debugging a 401 Unauthorized from the Proxy',
        difficulty: 'intermediate',
        situation:
                'Your frontend receives HTTP 401 { "error": "Unauthorized: valid session token required" } ' +
                'when calling POST /api/chat. What is the most likely cause and fix?',
        choices: [
          {
                    text:
                                'The sessionToken field is missing, empty, or does not start with ' +
                                '"ppwr-session-" and be longer than 20 characters. ' +
                                'Fix: ensure the frontend passes a valid token, e.g. ' +
                                '"ppwr-session-abc123def456ghi789jkl012".',
                    correct: true,
                    feedback:
                                'Correct. isValidSessionToken() in chat.js rejects any token that ' +
                                'does not pass the startsWith + length check. In production, replace ' +
                                'with real JWT validation.',
                    legalRef: 'PPWR Dev Guide — reference-app-data.js, card id 903',
          },
          {
                    text: 'The ANTHROPIC_API_KEY environment variable is not set.',
                    correct: false,
                    feedback:
                                'A missing API key causes a 500 error from Anthropic, not a 401 ' +
                                'from your proxy. The 401 is always a session token problem.',
                    legalRef: '',
          },
              ],
  },
  {
        id: 903,
        title: 'Extending the Proxy to Support a New Hosting Provider',
        difficulty: 'advanced',
        situation:
                'You want to host the PPWR proxy on AWS Lambda instead of Vercel or Cloudflare. ' +
                'What is the recommended approach based on the reference app pattern?',
        choices: [
          {
                    text:
                                'Copy worker.js, wrap the fetch logic in an AWS Lambda handler ' +
                                '(exports.handler = async (event) => { ... }), read the API key from ' +
                                'process.env.ANTHROPIC_API_KEY set via AWS Secrets Manager or Lambda ' +
                                'environment variables, and update PROXY_ENDPOINT in index.html to ' +
                                'your Lambda function URL.',
                    correct: true,
                    feedback:
                                'Correct. The worker.js pattern is a thin adapter. The same core logic ' +
                                '(validate token → check quota → build knowledge block → call Anthropic → ' +
                                'return structured response) works on any serverless platform by swapping ' +
                                'the outer handler signature.',
                    legalRef: 'PPWR Dev Guide — reference-app-data.js, card id 907',
          },
          {
                    text: 'Embed the API key directly in index.html for AWS hosting.',
                    correct: false,
                    feedback:
                                'Never put the API key in the browser. The entire point of the proxy ' +
                                'pattern is to keep the key server-side only.',
                    legalRef: 'PPWR Dev Guide — reference-app-data.js, card id 902',
          },
              ],
  },
  ];
