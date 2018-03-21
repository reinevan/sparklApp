
export function configureFakeBE() {
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(() => {
                // authenticate
                if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                    // respond 200 OK
                    resolve({ ok: true, json: () => ({}) });

                    return;
                }

                // get users
                if (url.endsWith('/users') && opts.method === 'GET') {
                    // respond 200 OK
                    resolve({ ok: true, json: () => ({}) });

                    return;
                }

                // get user by id
                if (url.match(/\/users\/\d+$/) && opts.method === 'GET') {
                    // respond 200 OK
                    resolve({ ok: true, json: () => ({}) });

                    return;
                }

                // register user
                if (url.endsWith('/users/register') && opts.method === 'POST') {
                    // respond 200 OK
                    resolve({ ok: true, json: () => ({}) });

                    return;
                }

                // delete user
                if (url.match(/\/users\/\d+$/) && opts.method === 'DELETE') {
                    // Respond 200 OK
                    resolve({ ok: true, json: () => ({}) });

                    return;
                }

                // pass through any requests not handled above
                realFetch(url, opts).then(response => resolve(response));

            }, 500);
        });
    }
}