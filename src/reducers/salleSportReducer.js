const init =[{_id:0,img:'https://previews.123rf.com/images/zhudifeng/zhudifeng1609/zhudifeng160900507/62799509-design-and-equipment-in-modern-gym.jpg',salleName:'salle asma',location:'sousse'},
{_id:1,img:'https://previews.123rf.com/images/zhudifeng/zhudifeng1609/zhudifeng160900507/62799509-design-and-equipment-in-modern-gym.jpg',salleName:'salle adel',location:'bennane'},
{_id:2,img:'https://media-cdn.tripadvisor.com/media/photo-s/08/7a/13/00/gym.jpg',salleName:'salle amine',location:'bennane'},
{_id:3,img:'https://st.hzcdn.com/simgs/f081cd7601e96479_4-1827/home-design.jpg',salleName:'salle amine',location:'msaken'},
{_id:4,img:'https://media-cdn.tripadvisor.com/media/photo-s/08/7a/13/00/gym.jpg',salleName:'salle adel',location:'sfax'},
{_id:5,img:'https://st.hzcdn.com/simgs/f081cd7601e96479_4-1827/home-design.jpg',salleName:'salle asma',location:'sousse'},
{_id:6,img:'https://st.hzcdn.com/simgs/f081cd7601e96479_4-1827/home-design.jpg',salleName:'salle adel',location:'bennane'},
{_id:7,img:'https://previews.123rf.com/images/zhudifeng/zhudifeng1609/zhudifeng160900507/62799509-design-and-equipment-in-modern-gym.jpg',salleName:'salle amine',location:'bennane'},
{_id:8,img:'https://media-cdn.tripadvisor.com/media/photo-s/08/7a/13/00/gym.jpg',salleName:'salle ahmed',location:'msaken'},
{_id:9,img:'https://previews.123rf.com/images/zhudifeng/zhudifeng1609/zhudifeng160900507/62799509-design-and-equipment-in-modern-gym.jpg',salleName:'salle asma',location:'sfax'}]


const salleSportReducer = (state=init,action)=>{
    switch (action.type){
        case "SEARCH_SALLE_Sport": 
            return init.filter(el=> {
                if (action.field.trim()===''){
                    return true}
                else return (el.salleName===action.field||el.location===action.field)     
            })
        default : 
            return state; 
    }
}
export default salleSportReducer; 