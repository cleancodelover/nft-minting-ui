import * as Yup from "yup";

export const iValidateMinting = Yup.object({
  name: Yup.string().required("NFT name is required."),
  description: Yup.string().required("NFT Description is required"),
  logoUrl: Yup.string().required("NFT Url is required").url("Must be a valid URL"),
});
