import yup from "yup";

const userSchema = yup.object().shape({
    user: yup.string().required("Campo name é obrigatório"),
    password: yup.string().required("Campo password é obrigatório"),
});

async function userValidate(user) {
    try {
        const parsedUser = userSchema.cast(user);
        const resul = await userSchema.validate(parsedUser, {
            abortEarly: false,
        });

        return {
            success: true,
            data: resul,
        };
    } catch (err) {
        return {
            success: false,
            errors: err?.errors,
        };
    }
}

export { userValidate };
