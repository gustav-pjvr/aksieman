// Preview gate: visitors see the coming-soon page unless their device
// carries the preview cookie. Unlock once per device via /unlock?key=<PREVIEW_KEY>.
const COOKIE = 'aks_preview';
const YEAR = 60 * 60 * 24 * 365;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const key = env.PREVIEW_KEY || '';

    if (url.pathname === '/unlock') {
      const ok = key && url.searchParams.get('key') === key;
      return new Response(null, {
        status: 302,
        headers: {
          Location: '/',
          ...(ok && {
            'Set-Cookie': `${COOKIE}=${key}; Path=/; Max-Age=${YEAR}; HttpOnly; Secure; SameSite=Lax`,
          }),
        },
      });
    }

    if (url.pathname === '/lock') {
      return new Response(null, {
        status: 302,
        headers: {
          Location: '/',
          'Set-Cookie': `${COOKIE}=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax`,
        },
      });
    }

    const cookies = request.headers.get('Cookie') || '';
    const authed = key && cookies.split(/;\s*/).includes(`${COOKIE}=${key}`);
    if (authed) return env.ASSETS.fetch(request);

    const page = await env.ASSETS.fetch(new URL('/coming-soon.html', url));
    return new Response(page.body, {
      status: 200,
      headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' },
    });
  },
};
