import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles? :string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
}

export interface OptionProps {
    title: string;
    value: string;
  }

  
export interface CustomFiiltersProps {
    options: OptionProps[];
   setFilter: (selected: T) => void;
}

export interface SearchManuFacturerProps {
    searchManufacturer: string;
    setSearchManufacturer: (manufacturer: string) => void;
    selected: string;
    setSelected: (selected: string) => void;
  }
  
  export interface CarCardProps {
    model: string;
    make: string;
    mpg: number;
    transmission: string;
    year: number;
    drive: string;
    cityMPG: number;
  }
  

  export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
  }

  export interface FilterProps {
    manufacturer?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
  }
  
export interface HomeProps {
  searchParams: FilterProps;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  setLimit: (limit: number) => void;
}

export interface searchbarProps {
  
  setManufacturer: (manufacturer: string) => void;
  setModel: (model: string) => void;
}