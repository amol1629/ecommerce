import * as Yup from "yup";

export const BrandValidationSchema = Yup.object({
  brandname: Yup.string()
    .trim()
    .min(2, "Brand name must contains at least 2 characters.")
    .max(40, "Brand name must contains maximum 40 characters.")
    .required("Please enter brand name"),
});
