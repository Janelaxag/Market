import { FC } from "react";
import { HeaderOrganism, FooterOrganism } from "../../components/organisms";
import { BasketPagesMolecules } from "../../components/molecules/";

export const BasketPagesTemplate: FC = () => {
  return (
    <div>
      <HeaderOrganism />
      <BasketPagesMolecules />
      <FooterOrganism />
    </div>
  );
};
