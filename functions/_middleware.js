const arcadeFiles = async ({request,next,env}) => {
    const url = new URL(request.url);
    console.log("REQUEST:",url.pathname)
    if (url.pathname.indexOf('index.wasm') || url.pathname.indexOf('index.pck')) {
        let obj = 'index.';
        if (url.pathname.indexOf('wasm')) {
            obj = obj+'wasm';
        } else {
            obj = obj+'pck';
        }
        const arcadeFile = await env.ARCADE_FILES.get(obj);
        console.log('File Found:',obj, arcadeFile.httpEtag);
        const headers = new Headers();
        arcadeFile.writeHttpMetadata(headers);
        headers.set('etag', arcadeFile.httpEtag);
        headers.set('content-range',`bytes ${arcadeFile.size}`);
        headers.set('content-type', obj.indexOf('wasm') >= 0 ? 'application/wasm':'');
        const status = 200;
        let response = new Response(arcadeFile.body, {
            headers,
            status
        });

        return response;
    }
    return next();
}

export const onRequest = [arcadeFiles];