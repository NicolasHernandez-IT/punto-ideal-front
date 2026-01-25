const urlBack='http://localhost:3001'

export const getBack = async () => {
    return (await (fetch(`${urlBack}`))).json();
 
}

