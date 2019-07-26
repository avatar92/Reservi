const init =[{_id:0,img:'https://www.nreionline.com/sites/nreionline.com/files/styles/article_featured_standard/public/planet-fitness.jpg?itok=6Aaak363',salleName:'salle asma',location:'sousse'},
{_id:21,img:'https://cdn.cnn.com/cnnnext/dam/assets/170526142440-worlds-best-hotel-gyms-the-siam-full-169.jpg',salleName:'salle adel',location:'bennane'},
{_id:22,img:'https://cdn.gearpatrol.com/wp-content/uploads/2018/04/Most-Luxurious-Gyms-gear-patrol-TMPL.jpg',salleName:'salle amine',location:'bennane'},
{_id:23,img:'http://images.jdmagicbox.com/comp/visakhapatnam/g1/0891px891.x891.180715194007.p5g1/catalogue/roxy-fitness-studio-pendurthy-visakhapatnam-gyms-pyxbr4qrwu.jpg',salleName:'salle haythem',location:'sousse'},
{_id:24,img:'https://cdn.gearpatrol.com/wp-content/uploads/2018/04/Most-Luxurious-Gyms-gear-patrol-TMPL.jpg',salleName:'salle ahmed',location:'sfax'},
{_id:25,img:'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fjonisweet%2Ffiles%2F2019%2F03%2Fbest-hotel-gyms-The-Vines-1200x801.jpg',salleName:'salle asma',location:'sousse'},
{_id:26,img:'https://www.nreionline.com/sites/nreionline.com/files/styles/article_featured_standard/public/planet-fitness.jpg?itok=6Aaak363',salleName:'salle adel',location:'bennane'},
{_id:27,img:'https://cdn.cnn.com/cnnnext/dam/assets/170526142440-worlds-best-hotel-gyms-the-siam-full-169.jpg',salleName:'salle amine',location:'bennane'},
{_id:28,img:'https://cdn.gearpatrol.com/wp-content/uploads/2018/04/Most-Luxurious-Gyms-gear-patrol-TMPL.jpg',salleName:'salle magroun',location:'sousse'},
{_id:29,img:'https://cdn.gearpatrol.com/wp-content/uploads/2018/04/Most-Luxurious-Gyms-gear-patrol-TMPL.jpg',salleName:'salle salim',location:'sfax'}]

const salleSportReducer = (state=init,action)=>{
    switch (action.type){
        case "SEARCH_SALLE_SPORT": 
            return init.filter(el=> {
                if (action.field.trim()===''){
                    return true}
                else return (el.salleName===action.field||el.location===action.field)     
            })
        case "REMOVE_SALLE_SPORT": 
            return state.filter(el=>el._id!==action._id)
        default : 
            return state; 
    }
}
export default salleSportReducer; 