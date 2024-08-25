export class MenuModel{
    name:string ="";
    icon:string ="";
    url:string="";
    isTitle :boolean =false;
    subMenus:MenuModel[]=[];

}
export const Menus:MenuModel[]=[
    {
        name:"Anasayfa",
        icon:"far fa fa-home",
        url:"/",
        subMenus:[],
        isTitle:false
    },
    {
        name:"Admin",
        icon:"",
        url:"/",
        subMenus:[],
        isTitle:true
    },
    {
        name:"Yönetim",
        icon:"fas fa fa-users",
        url:"",
        isTitle:false,
        subMenus:[
            {
                 name:"Kullanıcılar",
                 icon:"far fa fa-user",
                 url:"/Users",
                 isTitle:false,
                 subMenus:[]
            }
        ]
    }
]