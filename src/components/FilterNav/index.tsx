import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterNavProps {
  setSortOption: (option: string) => void;
}

const FilterNav: React.FC<FilterNavProps> = ({ setSortOption }) => {
  return (
    <Select onValueChange={setSortOption}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All</SelectItem>
        <SelectItem value="low-high">Price, low to high</SelectItem>
        <SelectItem value="high-low">Price, high to low</SelectItem>
        <SelectItem value="a-z">Alphabetically, A-Z</SelectItem>
        <SelectItem value="z-a">Alphabetically, Z-A</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default FilterNav;
