import { updateProfile } from "firebase/auth";

export const updateUserDisplayName = async (user, firstname, surname) => {
  const capitalizedFirstname =
    firstname.charAt(0).toUpperCase() + firstname.slice(1).toLowerCase();

  const capitalizedSurname =
    surname.charAt(0).toUpperCase() + surname.slice(1).toLowerCase();

  return await updateProfile(user, {
    displayName: capitalizedFirstname + " " + capitalizedSurname,
  });
};
