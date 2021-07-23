class EmbeddedWebview extends HTMLElement{
    connectedCallback(){
        const headers = {
            'Access-Control-Allow-Origin': 'http://140.124.135.11:5500/',
            'Access-Control-Allow-Credentials': 'true',
        };
        const option = {
            method: 'GET',
            mode: 'no-cors',
        };
        fetch(this.getAttribute('src'), option)
            .then(response => response.body())
            .then(html => {
                const shadow = this.attachShadow({mode: 'closed' });
                shadow.innerHTML = html;
            });
    }
}

window.customElements.define(
    'embedded-webview',
    EmbeddedWebview
);