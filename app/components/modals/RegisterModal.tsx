"use client"

import { AiFillGithub } from "react-icons/ai"
import {FcGoogle} from "react-icons/fc"
import { useCallback, useState } from "react"
import {
  FieldValues,
  SubmitHandler,
  useForm
} from "react-hook-form"

import useRegisterModal from "@/app/hooks/useRegisterModal"

const RegisterModal = () => {

  const RegisterModal = useRegisterModal()
  const [isLoading, setIsLoading] = useState(false)

  const{
    register,
    handleSubmit,
    formState:{
      errors,
    }
  } = useForm<FieldValues>({
  defaultValues:{
      name: '',
      email: '',
      password: '' //1:08:12
  
  } 
      })

  return (
    <div>
        
    </div>
  )
}

export default RegisterModal