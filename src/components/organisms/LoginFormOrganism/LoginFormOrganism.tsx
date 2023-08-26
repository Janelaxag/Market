import { FC } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { Button } from "../../atoms/";
import { LoginFormFields } from "../../molecules/";
import { ILoginFormOrganismProps } from "./LoginFormOrganism.interface";

export const LoginFormOrganism: FC<ILoginFormOrganismProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LoginFormFields register={register} errors={errors} />
      <Button type="submit">{"Войти"}</Button>
    </form>
  );
};
