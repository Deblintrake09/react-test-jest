
export const getUser = () => ({
        uid: 'ABC123',
        username: 'SuperUser2021'
});

export const getUsuarioActivo = ( nombre ) =>({
    uid: 'ABC567',
    username: nombre
});

console.log(getUsuarioActivo("Pedro"));