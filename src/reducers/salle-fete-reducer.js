const allSalle=[
    {
        _id:31,
        img:"https://www.mariageatoutprix.com/wp-content/uploads/2018/04/couverture-Venizia.png",
        name:"L'Elegance",
        ville:"bizert"
    },
    {
        _id:32,
        img:"https://www.mariageatoutprix.com/wp-content/uploads/2017/11/23599942_10214198803075136_880252041_o.jpg",
        name:"L'Elegance",
        ville:"Sfax"
    },
    {
        _id:33,
        img:"https://www.mariageatoutprix.com/wp-content/uploads/2017/11/23599942_10214198803075136_880252041_o.jpg",
        name:"L'Elegance",
        ville:"Tunis"
    },
    {
        _id:34,
        img:"https://www.mariageatoutprix.com/wp-content/uploads/2018/04/couverture-Venizia.png",
        name:"L'Elegance",
        ville:"Sousse"
    },
    {
        _id:35,
        img:"https://www.mariageatoutprix.com/wp-content/uploads/2017/11/23599942_10214198803075136_880252041_o.jpg",
        name:"L'Elegance",
        ville:"Sfax"
    },
    {
        _id:36,
        img:"https://www.mariageatoutprix.com/wp-content/uploads/2017/11/23599942_10214198803075136_880252041_o.jpg",
        name:"L'Elegance",
        ville:"Tunis"
    },
    {
        _id:37,
        img:"https://www.mariageatoutprix.com/wp-content/uploads/2018/04/couverture-Venizia.png",
        name:"L'Elegance",
        ville:"Sousse"
    },
    {
        _id:38,
        img:"https://www.mariageatoutprix.com/wp-content/uploads/2017/11/23599942_10214198803075136_880252041_o.jpg",
        name:"L'Elegance",
        ville:"Sfax"
    },
    {
        _id:39,
        img:"https://www.mariageatoutprix.com/wp-content/uploads/2017/11/23599942_10214198803075136_880252041_o.jpg",
        name:"L'Elegance",
        ville:"Tunis"
    },
    {
        _id:130,
        img:"https://www.mariageatoutprix.com/wp-content/uploads/2018/04/couverture-Venizia.png",
        name:"L'Elegance",
        ville:"Sousse"
    },
    {
        _id:131,
        img:"https://www.mariageatoutprix.com/wp-content/uploads/2017/11/23599942_10214198803075136_880252041_o.jpg",
        name:"L'Elegance",
        ville:"Sfax"
    },
    {
        _id:132,
        img:"https://www.mariageatoutprix.com/wp-content/uploads/2017/11/23599942_10214198803075136_880252041_o.jpg",
        name:"L'Elegance",
        ville:"Tunis"
    },
]
const salleFeteReducer = (state = allSalle, action) => {
    switch (action.type) {
        case ('SEARCH_SALLE_FETE'):
            return allSalle.filter(el => {
                if(action.searchTerm.trim() === ''){
                    return true
                }else{
                    return (el.name.toLocaleLowerCase().indexOf(action.searchTerm) > -1 || el.ville.toLocaleLowerCase().indexOf(action.searchTerm) > -1)
                }
            });
        default:
            return state;
    }
}
export default salleFeteReducer