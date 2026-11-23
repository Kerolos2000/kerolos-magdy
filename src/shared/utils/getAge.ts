export const getAge = (birthDate: string): number =>
  new Date().getFullYear() - new Date(birthDate).getFullYear();
