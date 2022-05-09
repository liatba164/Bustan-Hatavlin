import Categories from "./Categories";
import StorageType from "./StoragesType";

export default class Products{ 

id: number = 0 ;
name: string = "" ;
quantity: number = 0;
idCategory: number = 0;
srcImg: string = "";
  IdStorageType: number = 0;
  IdCategoryNavigation: Categories = null!;
  IdStorageTypeNavigation: StorageType = null!;
}
