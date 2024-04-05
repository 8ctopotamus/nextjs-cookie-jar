import { FC } from "react"

import  { type AllSettings } from "@/lib"

import { FormFields } from "./fields"
import { Results } from './results'

import styles from './styles.module.css'

type Props = AllSettings & {
  result: string
  formAction(formData: FormData): void
}

export const CookieDeliveryCalculator: FC<Props> = ({ formAction, result, ...props }) => {
  return (
    <>
      <form action={formAction} className={styles.form}>
        <FormFields {...props} />
        <Results result={result} {...props} />
      </form>
    </>
  )
}