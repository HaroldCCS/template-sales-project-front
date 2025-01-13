import axios from "axios"
import { useState } from "react"
import env from "../settings/env"


const usePaymentQR = () => {
  const [loading, setLoading] = useState(false)

  const generateLink = async (data: { price: number, description: string }) => {
    setLoading(true)
    const path = '/payment/generateLink'
    try {
      const response = await axios.post(
        env.SERVERLESS_URL + path,
        {
          amount: data.price,
          description: data.description,
          isTestMode: env.GENERATE_LINK_MODE_TEST
        },
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      );
      setLoading(false)
      console.log(response)

      return response.data
    } catch (error) {
      console.log('usePaymentQR error', error)
      return ''
    } finally {
      setLoading(false)
    }
  }


  return {
    generateLink,
    loading
  }
}

export default usePaymentQR