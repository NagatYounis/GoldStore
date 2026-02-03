import { useMutation } from "@tanstack/react-query"
import authApi, { type LoginData } from "../auth"

export const useLogin = () => {
  return useMutation({
    mutationFn: (data: LoginData) => authApi.lgoin(data),
  })
}
