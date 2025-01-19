function customRender(element, container){
    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.children
    domElement.setAttribute('href', element.props.href)
    domElement.setAttribute('target', element.props.target)

    container.appendChild(domElement)
}



const element = {
    type:'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    }, 
    children: 'Click me to visit google'


}

const main_container = document.querySelector("#root");
customRender(element,container)

