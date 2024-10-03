import { ChangeEvent, useState } from "react";

interface FormValues {
   [key: string]: string | number
}

export const useForm = <T extends FormValues>(initialValues: T) => {
   const [values, setValues] = useState<T>(initialValues);

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target
      setValues({ ...values, [name]: value })
   }

   return {
      values,
      handleChange,
      resetForm: function () {
         setValues(initialValues)
      }
   }
}