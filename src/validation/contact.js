import * as Yup from "yup";


export const contactSchema = Yup.object({
    name: Yup.string().required("please fill currect name"),
    email: Yup.string().email().required("please fill the currect email"),
    message: Yup.string().required("please fill some message")
})