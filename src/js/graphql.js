const endpoint = 'http://localhost:10000/graphql';

fetch(
    endpoint,
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `{
                menuItems(where: {location: PRIMARY}) {
                    nodes {
                    menuItemId
                    url
                    cssClasses
                    label
                    target
                    }
                }
            }`
        }),
    }
)
.then(res => res.json())
.then(function(response) {
    const menus = {
        nodeData: response.data['menuItems'].nodes,
        mainNav: document.querySelector('#main_nav'),
        mainUL: document.createElement('ul')
    }
    function menuAll(menus){
        for(let i = 0; i < menus.nodeData.length; i++){
            let menu = menus.nodeData[i];
            let li = document.createElement('li');
            let menuTarget = `target="${menu.target}"`;
            if(!menu.target){
                menuTarget = '';
            }
            li.innerHTML = `
                <li id="menuid_${menu.menuItemId}" class="menuitem ${menu.cssClasses}">
                    <a href="${menu.url}" ${menuTarget}>
                        <span>${menu.label}</span>
                    </a>
                </li>
            `
            menus.mainUL.appendChild(li);
        }
    }
    menuAll(menus);
    menus.mainNav.appendChild(menus.mainUL);
})
.catch(error => console.error('Error:', error));
