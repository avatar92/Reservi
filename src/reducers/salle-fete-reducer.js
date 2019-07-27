const allSalle=[
    {
        _id:1,
        img:"https://www.mariageatoutprix.com/wp-content/uploads/2018/04/couverture-Venizia.png",
        name:"L'Elegance",
        ville:"bizert"
    },
    {
        _id:2,
        img:"https://www.mariageatoutprix.com/wp-content/uploads/2017/11/23599942_10214198803075136_880252041_o.jpg",
        name:"L'Elegance",
        ville:"Sfax"
    },
    {
        _id:3,
        img:"https://www.mariageatoutprix.com/wp-content/uploads/2017/11/23599942_10214198803075136_880252041_o.jpg",
        name:"L'Elegance",
        ville:"Tunis"
    },
    {
        _id:4,
        img:"https://www.mariageatoutprix.com/wp-content/uploads/2018/04/couverture-Venizia.png",
        name:"L'Elegance",
        ville:"Sousse"
    },
    {
        _id:5,
        img:"https://www.mariageatoutprix.com/wp-content/uploads/2017/11/23599942_10214198803075136_880252041_o.jpg",
        name:"L'Elegance",
        ville:"Sfax"
    },
    {
        _id:6,
        img:"https://www.mariageatoutprix.com/wp-content/uploads/2017/11/23599942_10214198803075136_880252041_o.jpg",
        name:"L'Elegance",
        ville:"Tunis"
    },
    {
        _id:7,
        img:"https://www.mariageatoutprix.com/wp-content/uploads/2018/04/couverture-Venizia.png",
        name:"L'Elegance",
        ville:"Sousse"
    },
    {
        _id:8,
        img:"https://www.mariageatoutprix.com/wp-content/uploads/2017/11/23599942_10214198803075136_880252041_o.jpg",
        name:"L'Elegance",
        ville:"Sfax"
    },
    {
        _id:9,
        img:"https://www.mariageatoutprix.com/wp-content/uploads/2017/11/23599942_10214198803075136_880252041_o.jpg",
        name:"L'Elegance",
        ville:"Tunis"
    },
    {
        _id:10,
        img:"https://www.mariageatoutprix.com/wp-content/uploads/2018/04/couverture-Venizia.png",
        name:"L'Elegance",
        ville:"Sousse"
    },
    {
        _id:11,
        img:"https://www.mariageatoutprix.com/wp-content/uploads/2017/11/23599942_10214198803075136_880252041_o.jpg",
        name:"L'Elegance",
        ville:"Sfax"
    },
    {
        _id:12,
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