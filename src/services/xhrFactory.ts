export const $http = {
    
	get: (url: string) => _sendRequest(url, null, 'GET'),
    
    post: (url: string, payload: any) => _sendRequest(url, payload, 'POST'),
    
    put: (url: string, payload: any) => _sendRequest(url, payload, 'PUT'),
    
    delete: (url: string, payload: any) => _sendRequest(url, null, 'DELETE')
    
}
 
    function _sendRequest(url: string, payLoad: any, type: string): Promise {
        return new Promise((resolve, reject) => {
            var req = new XMLHttpRequest();
            req.open(type, url);
            req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
 
            req.onload = () => {
                if (req.status == 200) {
                    resolve(JSON.parse(req.response));
                } else {
                    reject(JSON.parse(req.response));
                }
            };
 
            req.onerror = () => {
                reject(JSON.parse(req.response));
            };
 
            if (payLoad) {
                req.send(JSON.stringify(payLoad));
            } else {
                req.send(null);
            }
        });
    }